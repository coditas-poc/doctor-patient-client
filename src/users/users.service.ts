import { Injectable, Logger } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    private logger = new Logger('UsersService');
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379',
            },
        });
    }

    public getPatients() {
        this.logger.log('Fetching patients');
        return this.client.send('getPatients', '');

    }
}
