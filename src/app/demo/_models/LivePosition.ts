import { PositionType } from './Enums';
import { Address } from './Address';

export class LivePosition {
  positionCode!: string;
  locationTIme!: Date;
  latitude!: number;
  longitude!: number;
  altitude!: number;
  heading!: number;
  speed!: number;
  prm!: number;
  odoMeter!: number;
  type!: PositionType;
  driverSeatBelt!: number;
  passengerSeatBelt!: number;
  fwdEngaged!: number;
  address!: Address;
}
