import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyDTO } from './emergency.dto';

@Controller('emergency')
export class EmergencyController {
    constructor(private readonly emergencyService: EmergencyService) { }

    @Get('medical-details')
    getMedicalDetails() {
        return this.emergencyService.getMedicalDetails();
    }

    @Post('medical-details')
    addMedicalDetails(@Body() emergency: EmergencyDTO) {
        return this.emergencyService.addMedicalDetails(emergency);
    }
    @Get('contact-details')
    getContactDetails() {
        return this.emergencyService.getContactDetails();
    }

    @Post('contact-details')
    addContactDetails(@Body() emergency: EmergencyDTO) {
        return this.emergencyService.addContactDetails(emergency);
    }
}
