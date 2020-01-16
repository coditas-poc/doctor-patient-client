export class EmergencyMedicalDTO {
    // readonly userID: number;
    readonly allergies: [];
    readonly medicines: [];
}

// tslint:disable-next-line:max-classes-per-file
export class EmergencyContactDTO {
    // readonly userID: number;
    readonly phone: number;
    readonly name: string;
    readonly relation: string;
}
