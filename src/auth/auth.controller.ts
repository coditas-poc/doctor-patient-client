import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
// @UseGuards(AuthGuard('local'))
export class AuthController {
  constructor(private readonly authService: AuthService,    public readonly jwtService: JwtService) { }

  @Post('login')
  async login(@Body() request): Promise<any> {
      console.log('>> request-server', request);
      // return this.authService.login(request);

      const authUser = await this.authService.login(request);
      console.log(authUser, 'authuser');
      return {
      // tslint:disable-next-line:no-string-literal
      access_token: this.jwtService.sign({ username: authUser['email'] }) ,
        // tslint:disable-next-line:no-string-literal
        user: authUser['email'],
      };
  }

  @Post('signup')
  async signup(@Body() res: any): Promise<any> {
    const signUp = this.authService.signUp(res);
    return signUp;
  }
}
