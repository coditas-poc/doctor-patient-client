import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }
	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}

// import { Controller, Get, Post, Param, Body, Delete } from "@nestjs/common";
// import { PatientsService, DoctorsService } from './app.service';
// import { CreateDoctorDTO, CreatePatientDTO } from './create.dto';

// @Controller()
// export class AppController {
// 	// inject the services
// 	constructor(private patientsService: PatientsService, private doctorsService: DoctorsService) {}

// 	/////////////////// PATIENT DESIGN PATTERNS ///////////////////

// 	// define message pattern for get all patients method
// 	@Get('getPatients')
// 	async getPatients() {
// 		return this.patientsService.getPatients()
// 	}

// 	// define message pattern for get doctor by id
// 	@Get('getPatient/:id')
// 	async getPatient(@Param('id') id: number) {
// 		return this.patientsService.getPatient(id)
// 	}

// 	@Post('addPatient')
// 	async addPatient(@Body() CreatePatientDTO: CreatePatientDTO) {
// 		const patient = await this.patientsService.addPatient(CreatePatientDTO);
// 		return patient;
// 	}

// 	@Delete('deletePatient/:id')
// 	async deletePatient(@Param('id') id: number) {
// 		return this.patientsService.deletePatient(id)
// 	}


// 	/////////////////// DOCTOR DESIGN PATTERNS ///////////////////

// 	// define message pattern for get all doctors method
// 	@Get('getDoctors')
// 	async getDoctors() {
// 		return this.doctorsService.getDoctors()
// 	}

// 	// define message pattern for get doctor by id
// 	@Get('getDoctor/:id')
// 	async getDoctor(@Param('id') id: number) {
// 		return this.doctorsService.getDoctor(id)
// 	}

// 	@Post('addDoctor')
// 	async addDoctor(@Body() CreateDoctorDTO: CreateDoctorDTO) {
// 		const doctor = await this.doctorsService.addDoctor(CreateDoctorDTO);
// 		return doctor;
// 	}

// 	@Delete('deleteDoctor/:id')
// 	async deleteDoctor(@Param('id') id: number) {
// 		return this.doctorsService.deleteDoctor(id)
// 	}
// }
