import { Controller, UseGuards, Post, Body, Get, Req, Res, Param } from '@nestjs/common';
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
  ) { }
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() res) {
    // handles the Google OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt) {
      return {
        statusCode: Constants.STATUSCODE.SUCCESS,
        status: Constants.STATUS.SUCCESS,
        access_token: jwt
      }
    }
  }
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
    const authUser = await this.authService.signUp(data);
    return {
      statusCode: Constants.STATUSCODE.SUCCESS,
      status: Constants.STATUS.SUCCESS,
      access_token: this.jwtService.sign({ email: authUser.email }),
    };
  }
  @Post('docSignup')
  async doctorSignup(@Body() data): Promise<any> {
    const authUser = await this.authService.doctorSignup(data);
    return {
      statusCode: Constants.STATUSCODE.SUCCESS,
      status: Constants.STATUS.SUCCESS,
      access_token: this.jwtService.sign({ email: authUser.email }),
    };
  }

  @Get('verify/email/:email')
  async verifyEmail(@Param() email): Promise<any> {
    return await this.authService.verifyEmail(email);
  }
  @Get('verify/memberId/:memberId')
  async verifyMemberId(@Param() memberId): Promise<any> {
    return await this.authService.verifyMemberId(memberId);
  }
}
