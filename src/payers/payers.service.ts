import { Injectable, HttpService, Logger } from '@nestjs/common';
import { client } from 'lib/client';


@Injectable()
export class PayersService {
  private logger = new Logger('PayersService');
  constructor() {}


  async getAllPayers(): Promise<any> {
    this.logger.log('Fectching payers');
    return client.send('getAllPayers', '');
  }

  async addPayers(payersData): Promise<any> {
    this.logger.log('Adding payers');
    return client.send('addPayers', payersData);
  }
  
}
