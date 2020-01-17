import { Controller, Get, Body } from '@nestjs/common';
import { PayersService } from './payers.service';

@Controller('payers')
export class PayersController {
  constructor(private readonly payersService: PayersService) {}

  @Get()
  getPayers(@Body() request): Promise < any > {
    return this.payersService.getAllPayers();
  }
}
