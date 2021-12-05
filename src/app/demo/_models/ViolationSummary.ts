import { EventMedia } from './EventMedia';
import { LivePosition } from './LivePosition';
import { LocationsItem } from './LocationsItem';
import { EventSummary } from './EventSummary';
import { SubEventMaster } from './SubEventMaster';
import { EventLog } from './EventLog';
import { EventDto } from './EventDto';

export class ViolationSummary {
  violationList: EventDto[] | undefined;
  totalViolation: number = 0;
  stopArmViolation: number = 0;
  safeZoneAlarm: number = 0;
  validationStatus: number = 0;
  processedStatus: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
}
