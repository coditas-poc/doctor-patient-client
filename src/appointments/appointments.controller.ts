import { Controller, Body, Req, Res, Post, UseGuards } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('appointments')
@UseGuards(AuthGuard('jwt'))
export class AppointmentsController {
  constructor(
    private readonly appiontmentsService: AppointmentsService,
  ) {}
  @Post('book')
  async saveAppointment(@Body() data) {
    return this.appiontmentsService.saveAppointment(data)
  }
}
