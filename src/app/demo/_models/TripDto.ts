import { EventDto } from './EventDto';
import { LivePosition } from './LivePosition';
import { SubTrip } from './SubTrip';

export class TripDto {
  startDate!: Date;
  endDate!: Date;
  tripCode!: number;
  vehicleRegistration!: string;
  startPositionCode!: number;
  endPositionCode!: number;
  eventTripCode!: number;
  vehicleCode!: number;
  totalVehicleEventsForTrip!: number;
  tripDuration!: number;
  tripDrivingTime!: number;
  tripStandingTime!: number;
  tripDistanceDriven!: number;
  tripStartOdoMeter!: number;
  tripEndOdoMeter!: number;
  tripMaxSpeed!: number;
  tripMaxPrm!: number;
  events!: EventDto[];
  startPositionDetails!: LivePosition;
  endPositionDetails!: LivePosition;
  subTrips!: SubTrip[];
  endLocationName!: string;
  startLocatioName!: string;
  driverName!: string;
  durationForTrip!: string;
  durationForDriving!: string;
  timeForStanding!: string;
  startLocation!: string;
  endLocation!: string;
}
