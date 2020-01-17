import { HttpException, Injectable, Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class UsersService {
    private logger = new Logger('UsersService');

    constructor() { }

    public getPatients() {
        this.logger.log('Fetching patients');
        return client.send('getPatients', '');

    }

    async getUserDetails(id: string) {
        this.logger.log('Fectching User Details');
        return client
            .send('getUserDetails', id)
            .toPromise()
            .catch(error => {
                throw new HttpException(error, error.status);
            });
    }
    async verifyUserOtp(details) {
        this.logger.log('Fectching patient Details');
        return client.send('verifyOtp', details).toPromise().catch(error => {
            throw new HttpException(error, error.status);
        });
    }
}
