import { UseCase } from '@/usecases/ports/use-case';
import { ClinicRepository } from '@/usecases/ports/clinic-repository';
import { Clinic } from '@/usecases/datatypes/clinic';
import { Query } from './datatypes/clinic copy';
// import { UnauthorizedError } from '@/usecases/errors/unauthorized-error';

export class SearchClinic implements UseCase {
  constructor(
    private readonly clinicRepository: ClinicRepository,
  ) { }

  async perform(query: Query, token: string): Promise<Clinic[]> {
    //Auth
    //if (!token) throw new UnauthorizedError();
    let clinicsData: Clinic[]
    
    clinicsData = clinicsData.concat(await this.clinicRepository.listDentalClinics());
    clinicsData =  clinicsData.concat(await this.clinicRepository.listVetClinics());

    let filteredClinics: Clinic[] = clinicsData;

    if (query.name) {
      filteredClinics = filteredClinics.filter(clinic =>
        clinic.clinicName.toLowerCase().includes(query.name.toLowerCase())
      );
    }

    if (query.state) {
      filteredClinics = filteredClinics.filter(clinic =>
        clinic.stateCode.toLowerCase().includes(query.state.toLowerCase())
      );
    }

    if (query.from && query.to) {
      filteredClinics = filteredClinics.filter(clinic => {
        const clinicFrom = parseInt(clinic.from.replace(':', ''));
        const clinicTo = parseInt(clinic.to.replace(':', ''));
        const queryFrom = parseInt(query.from.toString().replace(':', ''));
        const queryTo = parseInt(query.to.toString().replace(':', ''));

        return clinicFrom >= queryFrom && clinicTo <= queryTo;
      });
    }

    return await this.clinicRepository.listDentalClinics();
  }
}
