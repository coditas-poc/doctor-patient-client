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

  async login(payload): Promise<string> {
    return this.client
      .send('login', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error.response, error.status);
      });
  }

  async signUp(payload) {
    return this.client
      .send('signup', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error.message, error.status);
      });
  }

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      const payload = { thirdPartyId, provider };
      const jwt: string = sign(payload, process.env.JWT_SECRETE_TOKEN, {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  async verifyEmail(payload) {
    return this.client
      .send('verifyEmail', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error.message, error.status);
      });
  }
  async verifyMemberId(payload) {
    return this.client
      .send('verifyMemberId', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error.message, error.status);
      });
  }
}