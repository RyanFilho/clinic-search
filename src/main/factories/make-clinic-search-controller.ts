import { ClinicSearchController } from '@/presentation/controllers/clinic-search-controller';
import { Controller } from '@/presentation/controllers/ports/controller';
import { makeClinicRepository } from './make-clinic-repository';
import { SearchClinic } from '@/usecases/search-clinic';

export const makeClinicSearchController = (): Controller => {
  const clinicRepository = makeClinicRepository();
  const useCase = new SearchClinic(clinicRepository);
  const createClinicSearchController = new ClinicSearchController(useCase);
  return createClinicSearchController;
};
