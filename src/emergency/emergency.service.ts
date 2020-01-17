import { Injectable, HttpService, Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class EmergencyService {
    private logger = new Logger('EmergencyService');

    constructor() { }

    async getMedicalDetails(uid: string): Promise<any> {
        this.logger.log('Fetching medical details');
        return client.send('getMedicalDetails', uid);
    }
    async addMedicalDetails(emergency, uid): Promise<any> {
        this.logger.log('Adding medical details');
        return client.send('addMedicalDetails', emergency);
    }
    async getContactDetails(uid: string): Promise<any> {
        this.logger.log('Fetching contact details');
        return client.send('getContactDetails', uid);
    }
    async addContactDetails(emergency, uid): Promise<any> {
        this.logger.log('Adding contact details');
        return client.send('addContactDetails', emergency);
    }
}

