import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppointmentDto } from './appointments.dto';

@Injectable()
export class AppointmentsService {
  private logger = new Logger('AppointmentsService');
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    });
  }

  async saveAppointment(appointment: AppointmentDto): Promise<any> {
    console.log('Fetching save appointment',appointment)
    this.logger.log('Fetching save appointment');
    return this.client.send('saveAppointment', appointment);
  }

}