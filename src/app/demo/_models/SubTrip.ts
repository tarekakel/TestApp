import { EventDto } from './EventDto';
import { LivePosition } from './LivePosition';

export class SubTrip {
  code!: number;
  startDate!: Date;
  endDate!: Date;
  tripCode!: number;
  startPositionCode!: number;
  endPositionCode!: number;
  duration!: number;
  distanceDriven!: number;
  maxSpeed!: number;
  maxPrm!: number;
}
