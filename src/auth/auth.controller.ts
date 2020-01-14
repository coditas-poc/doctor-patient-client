import {
  Controller,
  Get,
  UseGuards,
  Res,
  Req,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { from } from 'rxjs';
import { ResponseBody } from '../../utils/responseBody';
import { Constants } from '../../utils/constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() request): Promise<any> {
    return this.authService.login(request);
  }
}
