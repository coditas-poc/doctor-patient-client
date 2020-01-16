import { Controller, UseGuards, Post, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { IAuthUser } from './auth.interfaces';
import { Constants } from 'utils/constants';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    public readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async login(@Body() data): Promise<any> {
    const authUser = await this.authService.login(data);
    return {
      statusCode: Constants.STATUSCODE.SUCCESS,
      status: Constants.STATUS.SUCCESS,
      access_token: this.jwtService.sign(authUser),
    };
  }

  @Post('signup')
  async signup(@Body() data): Promise<any> {
    const authUser = this.authService.signUp(data);
    return {
      statusCode: Constants.STATUSCODE.SUCCESS,
      status: Constants.STATUS.SUCCESS,
      access_token: this.jwtService.sign(authUser),
    };
  }
}
