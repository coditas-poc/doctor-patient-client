import { Controller, Body, Req, Res, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly appiontmentsService: AppointmentsService,
  ) {}
  @Post('book')
  async saveAppointment(@Body() data) {
    return this.appiontmentsService.saveAppointment(data)
  }
}
