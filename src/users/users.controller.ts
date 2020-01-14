import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

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
}
