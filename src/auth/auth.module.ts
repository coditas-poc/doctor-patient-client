import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthController } from './auth.controller';

import { UsersService } from '../users/users.service';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  providers: [AuthService, UsersService, JwtStrategy, GoogleStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
