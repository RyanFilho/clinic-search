import { UseCase } from '@/usecases/ports/use-case';
import { IClinicRepository } from '@/usecases/ports/clinic-repository';
import { IClinic } from '@/usecases/datatypes/interface-clinic';
import { IQuery } from './datatypes/interface-query';
import { Clinic } from '@/entity/Clinic';
// import { UnauthorizedError } from '@/usecases/errors/unauthorized-error';

export class SearchClinic implements UseCase {
  constructor(
    private readonly clinicRepository: IClinicRepository,
  ) { }

  async perform(query: IQuery, token: string): Promise<IClinic[]> {
    //Auth
    //if (!token) throw new UnauthorizedError();
    let vets = await this.clinicRepository.listVetClinics();
    let dentals = await this.clinicRepository.listDentalClinics();
    
    const clinicsData = [
      ...vets.map(vet => new Clinic(vet.clinicName, vet.stateCode, vet.opening.from, vet.opening.to)), 
      ...dentals.map(den => new Clinic(den.name, den.stateName, den.availability.from, den.availability.to)), 
    ];

    let filteredClinics: IClinic[] = clinicsData;

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
        if(clinic.from == '00:00' && clinic.to == '24:00') return true;

        const clinicFrom = parseInt(clinic.from.replace(':', ''));
        const clinicTo = parseInt(clinic.to.replace(':', ''));
        const queryFrom = parseInt(query.from.toString().replace(':', ''));
        const queryTo = parseInt(query.to.toString().replace(':', ''));

        return clinicFrom >= queryFrom && clinicTo <= queryTo;
      });
    }

    return filteredClinics;
  }
}
