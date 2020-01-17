import { Injectable, HttpService, Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class EmergencyService {
    private logger = new Logger('EmergencyService');

    constructor() { }

    async getMedicalDetails(user): Promise<any> {
        this.logger.log('Fetching medical details');
        return client.send('getMedicalDetails', user);
    }

    async addMedicalDetails(emergency,user): Promise<any> {
        this.logger.log('Adding medical details');
        return client.send('addMedicalDetails', { emergency: emergency, user: user });
    }

    async getContactDetails(user): Promise<any> {
        this.logger.log('Fetching contact details');
        return client.send('getContactDetails', user);
    }

    async addContactDetails(contact,user): Promise<any> {
        this.logger.log('Adding contact details');
        return client.send('addContactDetails', { contact: contact, user: user});
    }
}

