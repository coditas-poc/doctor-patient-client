import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class DoctorsService {
  private logger = new Logger('DoctorsService');

  constructor() {  }

  async saveDoctor(doctor): Promise<any> {
    this.logger.log('Fetching save doctors');
    return client.send('saveDoctor', doctor);
  }

  async getDoctors(): Promise<any> {
    this.logger.log('Fetching doctors');
    return client.send('getDoctors', '');
  }

  async getDoctorByUID(uid: string): Promise<any> {
    return client.send('getDoctorByUID', uid);
  }

  async getDoctorByNPI(npi: string): Promise<any> {
    return client.send('getDoctorByNPI', npi)
  }

  async getDoctorsSpecialities(): Promise<any> {
    return client.send('getDoctorsSpecialities', '')
  }

}
