import { Controller, Get, Post, Body, Req, Res, Param } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyMedicalDTO, EmergencyContactDTO } from './emergency.dto';

@Controller('emergency')
export class EmergencyController {
    constructor(private readonly emergencyService: EmergencyService) { }

    @Get('medical-details/:uid')
    getMedicalDetails(@Param('uid') uid: string) {
        return this.emergencyService.getMedicalDetails(uid);
    }

    @Post('medical-details/:uid')
    addMedicalDetails(@Body() emergencyMedical: EmergencyMedicalDTO, @Param('uid') uid: string) {
        return this.emergencyService.addMedicalDetails(emergencyMedical, uid);
    }
    @Get('contact-details/:uid')
    getContactDetails(@Param('uid') uid: string) {
        return this.emergencyService.getContactDetails(uid);
    }

    @Post('contact-details/:uid')
    addContactDetails(@Body() emergencyContact: EmergencyContactDTO, @Param('uid') uid: string) {
        return this.emergencyService.addContactDetails(emergencyContact, uid);
    }
}
