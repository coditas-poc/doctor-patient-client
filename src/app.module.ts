import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PatientsService, DoctorsService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [PatientsService, DoctorsService],
})
export class AppModule {}
