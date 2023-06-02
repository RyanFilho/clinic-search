import { HttpClinicRepository } from '@/external/repository/http-clinic-repository';
import { ClinicRepository } from '@/usecases/ports/clinic-repository';

export const makeClinicRepository = (): ClinicRepository => {
  return new HttpClinicRepository();
};
