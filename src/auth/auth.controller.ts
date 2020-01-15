import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
// @UseGuards(AuthGuard('local'))
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() request): Promise<any> {
      console.log('>> request-server', request);
      return this.authService.login(request);
  }
}
