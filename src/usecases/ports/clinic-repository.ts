import { Clinic } from '@/usecases/datatypes/clinic';

export interface ClinicRepository {
  listDentalClinics(): Promise<Clinic[]>;
  listVetClinics(): Promise<Clinic[]>;
}
