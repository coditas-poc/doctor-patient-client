import { Injectable, HttpService, Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class EmergencyService {
    private logger = new Logger('EmergencyService');

    constructor() { }

    async getMedicalDetails(id): Promise<any> {
        this.logger.log('Fetching medical details');
        return client.send('getMedicalDetails', id);
    }

    async addMedicalDetails(emergency,id): Promise<any> {
        this.logger.log('Adding medical details');
        return client.send('addMedicalDetails', { emergency: emergency, id: id });
    }

    async getContactDetails(id): Promise<any> {
        this.logger.log('Fetching contact details');
        return client.send('getContactDetails', id);
    }

    async addContactDetails(contact,id): Promise<any> {
        this.logger.log('Adding contact details');
        return client.send('addContactDetails', { contact: contact, id: id});
    }
}

