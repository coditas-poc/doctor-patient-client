import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { client } from 'lib/client';

@Injectable()
export class DoctorsService {
  private logger = new Logger('DoctorsService');

  constructor() { }

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
  async saveDoctor(doctor): Promise<any> {
    this.logger.log('save doctor details');
    return client.send('saveDoctor', doctor);
  }
  async registerDoctor(doctor): Promise<any> {
    this.logger.log('register doctor');
    return client.send('registerDoctor', doctor);
  }
  async updateDoctor(doctor): Promise<any> {
    this.logger.log('update doctor');
    return client.send('updateDoctor', doctor);
  }

}
