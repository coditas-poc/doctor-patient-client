import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyMedicalDTO, EmergencyContactDTO } from './emergency.dto';

@Controller('emergency')
export class EmergencyController {
    constructor(private readonly emergencyService: EmergencyService) { }

    @Get('medical-details')
    getMedicalDetails() {
        return this.emergencyService.getMedicalDetails();
    }

    @Post('medical-details')
    addMedicalDetails(@Body() emergencyMedical: EmergencyMedicalDTO) {
        return this.emergencyService.addMedicalDetails(emergencyMedical);
    }
    @Get('contact-details')
    getContactDetails() {
        return this.emergencyService.getContactDetails();
    }

    @Post('contact-details')
    addContactDetails(@Body() emergencyContact: EmergencyContactDTO) {
        return this.emergencyService.addContactDetails(emergencyContact);
    }
}
