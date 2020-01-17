import { Controller, Get, Post, Body, Req, Res, UseGuards } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyMedicalDTO, EmergencyContactDTO } from './emergency.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('emergency')
@UseGuards(AuthGuard('jwt'))
export class EmergencyController {
    constructor(private readonly emergencyService: EmergencyService) { }

    @Get('medical-details')
    getMedicalDetails(
        @GetUser() user
    ) {
        return this.emergencyService.getMedicalDetails(user);
    }

    @Post('medical-details')
    addMedicalDetails(
        @Body() emergencyMedical: EmergencyMedicalDTO,
        @GetUser() user
    ) {
        return this.emergencyService.addMedicalDetails(emergencyMedical,user);
    }
    @Get('contact-details')
    getContactDetails(
        @GetUser() user
    ) {
        return this.emergencyService.getContactDetails(user);
    }

    @Post('contact-details')
    addContactDetails(
        @Body() emergencyContact: EmergencyContactDTO,
        @GetUser() user    
    ) {
        return this.emergencyService.addContactDetails(emergencyContact,user);
    }
}
