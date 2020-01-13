export class CreateDoctorDTO {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly rating: number;
    readonly verified: boolean;
}

export class CreatePatientDTO {
    readonly id: number;
    readonly name: string;
    readonly verified: boolean;
}