import {
  Injectable,
  InternalServerErrorException,
  Logger,
  HttpException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { Users } from 'src/users/users.entity';
import bcrypt = require('bcrypt');
import { sign } from 'jsonwebtoken';;
import { client } from 'lib/client';
// const saltRounds = 10;
export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');
  constructor(
    public readonly usersService: UsersService
  ) { }

  async login(payload): Promise<string> {
    return client.send('login', payload).toPromise().catch(error => {
      throw new HttpException(error.response, error.status);
    });
  }

  async signUp(payload) {
    return client.send('signup', payload).toPromise().catch(error => {
      throw new HttpException(error.message, error.status);
    });
  }
  async doctorSignup(payload) {
    return client.send('docSignup', payload).toPromise().catch(error => {
      throw new HttpException(error.message, error.status);
    });
  }

  async validateOAuthLogin(thirdPartyId: string, provider: Provider, ): Promise<string> {
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
    return client
      .send('verifyEmail', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error.message, error.status);
      });
  }
  async verifyMemberId(payload) {
    return client
      .send('verifyMemberId', payload);
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const payload = { email, pass };
    return client
      .send('validateUser', payload)
      .toPromise()
      .catch(error => {
        throw new HttpException(error.message, error.status);
      });
  }

  // async validateOAuthLogin( thirdPartyId: string, provider: Provider): Promise<string> {
  //   const payload = { thirdPartyId, provider };
  //   return client
  //     .send('validateOAuthLogin', payload)
  //     .toPromise()
  //     .catch(error => {
  //       throw new HttpException(error.message, error.status);
  //     });
  // }
}
