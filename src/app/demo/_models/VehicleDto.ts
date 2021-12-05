import { EventEntity } from './EventEntity';
import { VehicleDriverHistoryDetails } from './VehicleDriverHistoryDetails';

export class VehicleDto {
  code!: number;
  updateDate!: Date;
  lastOdoMeter!: number;
  registration!: string;
  locationTIme!: Date;
  latitude!: number;
  longitude!: number;
  events: EventEntity[] = new Array<EventEntity>();
  totalVehicleEvents!: number;
  speed!: number;
  prm!: number;
  currentEvents!: number;
  reporting!: boolean;
  engineOn!: boolean;
  idle!: boolean;
  counter!: number;
  fmS_Serial_Number!: string;
  sM_Serial_Number!: string;
  vehicleStatus!: string;
  lastUpdateLocationDate!: Date;
  eventCount!: number;
  monthName!: number;
  yearName!: number;
  totalScore!: number;
  totalFatigue!: number;
  totalDistraction!: number;
  totalFOV!: number;
  totalOverspeeding!: number;
  totalHarshAcceleration!: number;
  totalForwardCollisionWarning!: number;
  totalHarshBraking!: number;
  totalLeftLaneDeparture!: number;
  totalMobileeyeTamperAlert!: number;
  totalNearmiss!: number;
  totalOverRevving!: number;
  totalPanicButton!: number;
  totalPedestrianInDangerZone!: number;
  totalPedestrianInForwardCollisionWarning!: number;
  totalRightLaneDeparture!: number;

  totalTrafficSignRecognition!: number;
  totalTrafficSignRecognitionWarning!: number;

  totalPowerFailure!: number;

  totalDistanceDriven!: number;
  totalDrivenTime!: string;
  totalStandingTime!: string;
  totalDuration!: string;
  vehicleState!: number;
  vehicleDriverHistoryDetails!: VehicleDriverHistoryDetails[];
  status!: number;
  driverName!: string;
  isGeofenceEnabled: boolean = false;

  chasisNumber!: string;
  deviceId!: number;
  online!: boolean;
  sim_IP!: string;
  plateCode!: string;
  plateNumber!: number;
  installationDate!: Date;
  callibration!: string;
  groupName!: string;
}
export class VehicleSummary {
  vehicles!: VehicleDto[];
  idle!: number;
  moving!: number;
  stopped!: number;
  notReporting!: number;
  totalVehicles!: number;
}
