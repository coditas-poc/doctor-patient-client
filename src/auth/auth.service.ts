import {
  Injectable,
  InternalServerErrorException,
  Logger,
  HttpException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { Users } from 'src/users/users.entity';
import bcrypt = require('bcrypt');
import { sign } from 'jsonwebtoken';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/common/enums/transport.enum';
// const saltRounds = 10;
export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');
  private client: ClientProxy;

  constructor(public readonly usersService: UsersService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  async login(user: any): Promise<string> {
    this.logger.log('Fectching login');
    return this.client
      .send('login', user)
      .toPromise()
      .catch(error => {
        throw new HttpException(error, error.status);
      });
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const payload = {email, pass};
    return this.client
    .send('validateUser', payload)
    .toPromise()
    .catch(error => {
      throw new HttpException(error, error.status);
    });
  }

  async validateOAuthLogin( thirdPartyId: string, provider: Provider): Promise<string> {
    const payload = { thirdPartyId, provider };
    return this.client
      .send('validateOAuthLogin', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error, error.status);
      });
  }
}
