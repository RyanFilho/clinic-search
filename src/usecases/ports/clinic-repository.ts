import { IDentalClinic } from '../datatypes/interface-dental-clinic';
import { IVetClinic } from '../datatypes/interface-vet-clinic';

export interface IClinicRepository {
  listDentalClinics(): Promise<IDentalClinic[]>;
  listVetClinics(): Promise<IVetClinic[]>;
}
