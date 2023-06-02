import { UseCase } from '@/usecases/ports/use-case';
import { ClinicRepository } from '@/usecases/ports/clinic-repository';
import { Clinic } from '@/usecases/datatypes/clinic';
// import { UnauthorizedError } from '@/usecases/errors/unauthorized-error';

export class SearchClinic implements UseCase {
  constructor(
    private readonly clinicRepository: ClinicRepository,
  ) {}

  async perform(token: string): Promise<Clinic[]> {
    //Auth
    //if (!token) throw new UnauthorizedError();

    return await this.clinicRepository.listDentalClinics();
  }
}
