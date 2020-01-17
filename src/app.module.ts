import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PayersModule } from './payers/payers.module';
import { EmergencyModule } from './emergency/emergency.module';

@Module({
  imports: [
    DoctorsModule,
    AppointmentsModule,
    UsersModule, 
    AuthModule,
    PayersModule, 
    EmergencyModule
  ]
})
export class AppModule {}
