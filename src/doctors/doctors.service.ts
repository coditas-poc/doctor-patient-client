import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

@Injectable()
export class DoctorsService {
  private logger = new Logger('DoctorsService');
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    });
  }

  async getDoctors(): Promise<any> {
    this.logger.log('Fetching doctors');
    return this.client.send('getDoctors', '');
  }

  async getDoctorByUID(uid: string): Promise<any> {
    return this.client.send('getDoctorByUID', uid);
  }

  async getDoctorByNPI(npi: string): Promise<any> {
    return this.client.send('getDoctorByNPI', npi)
  }

  async getDoctorsSpecialities(): Promise<any> {
    return this.client.send('getDoctorsSpecialities', '')
  }
  async saveDoctor(doctor): Promise<any> {
    this.logger.log('save doctor details');
    return this.client.send('saveDoctor', doctor);
  }
  async registerDoctor(doctor): Promise<any> {
    this.logger.log('register doctor');
    return this.client.send('registerDoctor', doctor);
  }
  async updateDoctor(doctor): Promise<any> {
    this.logger.log('update doctor');
    return this.client.send('updateDoctor', doctor);
  }

}
