import { Injectable, Logger, HttpException } from '@nestjs/common';
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

    async getUserDetails(email) {
        this.logger.log('Fectching User Details');
        return this.client
            .send('getUserDetails', email)
            .toPromise()
            .catch(error => {
                throw new HttpException(error, error.status);
            });
    }
}
