import { Injectable, HttpService, Logger } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/common/enums/transport.enum'


@Injectable()
export class PayersService {
  private logger = new Logger('PayersService');
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }


  async getAllPayers(): Promise<any> {
    this.logger.log('Fectching payers');
    return this.client.send('getAllPayers', '');
  }
}
