import { Injectable, Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class UsersService {
    private logger = new Logger('UsersService');

    constructor() {}

    public getPatients() {
        this.logger.log('Fetching patients');
        return client.send('getPatients', '');

    }
}
