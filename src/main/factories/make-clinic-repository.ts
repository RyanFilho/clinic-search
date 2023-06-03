import { HttpClinicRepository } from '@/external/repository/http-clinic-repository';
import { IClinicRepository } from '@/usecases/ports/clinic-repository';

export const makeClinicRepository = (): IClinicRepository => {
  return new HttpClinicRepository();
};
