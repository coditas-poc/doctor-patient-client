import { Controller, Get, UseGuards, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
      // inject the services
  constructor(
    private usersService: UsersService,
  ) {}

      // define message pattern for get all patients method
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
}
