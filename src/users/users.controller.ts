import { Controller, Get, UseGuards, Body, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, ) { }

  @Get('getPatients')
  async getPatients() {
    return this.usersService.getPatients();
  }

  @Get('userDetails/:id')
  @UseGuards(AuthGuard('jwt'))
  async getUserDetails(@Param() id: string) {
    const data = this.usersService.getUserDetails(id);
    return data;
  }

  @Post('verifyOtp')
  async verifyUserOtp(@Body() content) {
    const data = this.usersService.verifyUserOtp(content);
    return data;
  }
}
