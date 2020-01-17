import { Controller, Get, Body, Post } from '@nestjs/common';
import { PayersService } from './payers.service';

@Controller('payers')
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
