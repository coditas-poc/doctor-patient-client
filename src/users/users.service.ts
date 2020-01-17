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

    async getUserDetails(id: string) {
        this.logger.log('Fectching User Details');
        return this.client
            .send('getUserDetails', id)
            .toPromise()
            .catch(error => {
                throw new HttpException(error, error.status);
            });
    }
    async verifyUserOtp(details) {
        this.logger.log('Fectching patient Details');
        return this.client.send('verifyOtp', details).toPromise().catch(error => {
            throw new HttpException(error, error.status);
        });
    }
}
