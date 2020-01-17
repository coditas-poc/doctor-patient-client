import { Controller, Get, Post, Body, Req, Res, UseGuards, Param } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyMedicalDTO, EmergencyContactDTO } from './emergency.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('emergency')
@UseGuards(AuthGuard('jwt'))
export class EmergencyController {
    constructor(private readonly emergencyService: EmergencyService) { }

    @Get('medical-details/:id')
    getMedicalDetails(
        @Param() id: string,
    ) {
        return this.emergencyService.getMedicalDetails(id);
    }

    @Post('medical-details/:id')
    addMedicalDetails(
        @Body() emergencyMedical: EmergencyMedicalDTO,
        @Param() id: string,
    ) {
        return this.emergencyService.addMedicalDetails(emergencyMedical,id);
    }
    @Get('contact-details/:id')
    getContactDetails(
        @Param() id: string,
    ) {
        return this.emergencyService.getContactDetails(id);
    }

    @Post('contact-details/:id')
    addContactDetails(
        @Body() emergencyContact: EmergencyContactDTO,
        @Param() id: string,
    ) {
        return this.emergencyService.addContactDetails(emergencyContact,id);
    }
}
