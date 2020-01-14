export class CreateDoctorDTO {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly rating: number;
    readonly verified: boolean;
}

// tslint:disable-next-line:max-classes-per-file
export class CreatePatientDTO {
    readonly id: number;
    readonly name: string;
    readonly verified: boolean;
}
