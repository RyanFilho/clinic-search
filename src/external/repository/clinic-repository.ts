import { Clinic } from '@/usecases/datatypes/clinic';
import { HttpClient } from '../http/http-client';


export class ClinicRepository {
  async listDentalClinics(): Promise<Clinic[]> {
    const httpClient = new HttpClient('https://storage.googleapis.com/scratchpay-code-challenge/');
    return await httpClient.get<Clinic[]>('dental-clinics.json');
  }

  async listVetClinics(): Promise<Clinic[]> {
    const httpClient = new HttpClient('https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json');
    return await httpClient.get<Clinic[]>('users');
  }
}
