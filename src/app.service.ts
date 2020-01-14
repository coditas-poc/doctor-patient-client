
import { Injectable, } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

@Injectable()
export class PatientsService {
    private logger = new Logger('PatientsService');
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379'
            }
        });
    }

    public getPatients() {  
        this.logger.log('Fetching patients');
        return this.client.send('getPatients', '');
        
    }

    public getPatient(id: number) {  
        this.logger.log('Fetching patient by id');
        return this.client.send('getPatient', id);
        
    }

    public addPatient(patient: { id: number; name: string; verified: boolean; }) {
        this.logger.log('Adding new patient');
        return this.client.send('addPatient', patient);
    }

    public deletePatient(id: number) {
        this.logger.log('Deleting patient by id');
        return this.client.send('deletePatient', id);
    }
}

@Injectable()
export class DoctorsService {
    private logger = new Logger('DoctorsService');
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379'
            }
        });
    }

    public getDoctors() {  
        this.logger.log('Fetching doctors');
        return this.client.send('getDoctors', '');
        
    }

    public getDoctor(id: number) {  
        this.logger.log('Fetching doctor by id');
        return this.client.send('getDoctor', id);
        
    }

    public addDoctor(doctor: { id: number; name: string; type: string; rating: number; verified: boolean; }) {
        this.logger.log('Adding new doctor');
        return this.client.send('addDoctor', doctor);
    }

    public deleteDoctor(id: number) {
        this.logger.log('Deleting doctor by id');
        return this.client.send('deleteDoctor', id);
    }
}
