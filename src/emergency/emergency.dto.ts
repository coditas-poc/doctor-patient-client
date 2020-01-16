export class EmergencyMedicalDTO {
    readonly userID: number;
    readonly allergiesType: string;
    readonly allergiesName: string;
    readonly medicianPower: string;
    readonly medicianName: string;
    readonly medicianTime: string;
}

// tslint:disable-next-line:max-classes-per-file
export class EmergencyContactDTO {
    readonly userID: number;
    readonly mobileNumber: number;
    readonly name: string;
    readonly relation: string;
}
