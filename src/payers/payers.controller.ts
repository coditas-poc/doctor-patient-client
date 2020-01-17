import { Controller, Get, Body, Post, UseGuards } from '@nestjs/common';
import { PayersService } from './payers.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('payers')
@UseGuards(AuthGuard('jwt'))
export class PayersController {
  constructor(private readonly payersService: PayersService) {}

  @Get()
  getPayers(@Body() request): Promise < any > {
    return this.payersService.getAllPayers();
  }

  @Post('addPayer')
  addPayers(@Body() request): Promise<any> {
    return this.payersService.addPayers(request);
  }

}
