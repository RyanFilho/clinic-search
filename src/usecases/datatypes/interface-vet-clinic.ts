import { IAvailability } from "./interface-availability";

export interface IVetClinic {
  clinicName: string;
  stateCode: string;
  opening: IAvailability;
}
