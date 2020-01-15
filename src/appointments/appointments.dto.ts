import { ApiProperty } from '@nestjs/swagger';

export class AppointmentDto implements Readonly<AppointmentDto> {
    @ApiProperty()
    OTP: string;
    @ApiProperty()
    status: boolean;
    @ApiProperty()
    userId: string;
    @ApiProperty()
    npi: string;
}
