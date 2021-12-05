import { Time } from '@angular/common';
import { CoOrdinates } from './CoOrdinates';

export class Geofence {
  idString!: string;
  name!: string;
  description!: string;
  margin!: number;
  notification: boolean = false;
  north!: number;
  east!: number;
  south!: number;
  west!: number;
  centerLat!: number;
  centerLng!: number;
  shapeType!: string;
  radius!: number;
  points!: CoOrdinates[];
  vehicleCodes!: number[];
  startTime: any;
  endTime: any;
}
