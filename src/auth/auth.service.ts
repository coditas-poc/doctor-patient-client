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

  constructor(
    public readonly usersService: UsersService,
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  async login(user: any) {
    this.logger.log('Fectching login');
    return await this.client.send('login', user);
  }

}
