import { Controller, Get, Req, Res, Body, Param, Post } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorDTO } from './doctors.dto';



@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorService: DoctorsService) { }

  @Get()
  getDoctors(): Promise<any> {
    return this.doctorService.getDoctors();
  }

  @Get('specialities')
  getDoctorsSpecialities(): Promise<any> {
    return this.doctorService.getDoctorsSpecialities();
  }

  // @Get('register')
  // getPayers(@Body() doctor: DoctorDTO) {
  //   return this.doctorService.saveDoctor(doctor);
  // }

  @Get('/:uid')
  getDoctorByUID(@Param('uid') uid: string): Promise<any> {
    return this.doctorService.getDoctorByUID(uid);
  }

  @Get('/npi/:npi')
  getDoctorByNPI(@Param('npi') npi: string): Promise<any> {
    return this.doctorService.getDoctorByNPI(npi);
  }
  @Post('/')
  saveDoctorDetails(@Body() doctor: DoctorDTO) {
    return this.doctorService.saveDoctor(doctor);
  }
  @Post('/register')
  registerDoctor(@Body() doctor) {
    return this.doctorService.registerDoctor(doctor)
  }
  @Post('/login')
  updateDoctor(@Body() doctor) {
    return this.doctorService.updateDoctor(doctor)
  }
}
