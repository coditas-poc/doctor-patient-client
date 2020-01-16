import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { client } from 'lib/client';
import { AppointmentDto } from './appointments.dto';

@Injectable()
export class AppointmentsService {
  private logger = new Logger('AppointmentsService');

  constructor() {}

  async saveAppointment(appointment: AppointmentDto): Promise<any> {
    this.logger.log('Fetching save appointment');
    return client.send('saveAppointment', appointment);
  }

}