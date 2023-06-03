import { IClinic } from "@/usecases/datatypes/interface-clinic";

export class Clinic implements IClinic {
  constructor(
    public clinicName: string,
    public stateCode: string,
    public from: string,
    public to: string,
  ) {}
} 