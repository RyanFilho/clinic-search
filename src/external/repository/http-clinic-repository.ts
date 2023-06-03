import { HttpClient } from '../http/http-client';
import { IDentalClinic } from '@/usecases/datatypes/interface-dental-clinic';
import { IVetClinic } from '@/usecases/datatypes/interface-vet-clinic';


export class HttpClinicRepository {
  async listDentalClinics(): Promise<IDentalClinic[]> {
    const httpClient = new HttpClient('https://storage.googleapis.com/scratchpay-code-challenge');
    return await httpClient.get<IDentalClinic[]>('dental-clinics.json');
  }

  async listVetClinics(): Promise<IVetClinic[]> {
    const httpClient = new HttpClient('https://storage.googleapis.com/scratchpay-code-challenge');
    return await httpClient.get<IVetClinic[]>('vet-clinics.json');
  }
}
