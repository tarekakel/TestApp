import { VehicleHistory } from './VehicleHistory';

export class DriverDto {
  code!: number;
  driverCode!: number;

  vendorCode!: number;

  vontractorCode!: number;

  name!: string;

  dateOfBirth!: Date;

  mobile!: string;

  adsdNumber!: string;

  lastUpdated!: Date;

  licenseIssueDate!: Date;

  licenseExpiryDate!: Date;
  driverAge!: number;
  email!: string;
  licenceExpiryDaysCount!: number;
  score!: number;

  fatigueScore!: number;

  fovScore!: number;

  distractionScore!: number;

  forwardCollisionWarningScore!: number;

  harshAccelerationScore!: number;
  harshBrakingScore!: number;

  overSpeedingScore!: number;

  drivingHours!: number;
  drivingDistance!: number;
  totalTrips!: number;

  totalEvents!: number;

  fatigueCount!: number;
  fOVCount!: number;
  distractionCount!: number;
  forwardCollisionWarningCount!: number;
  harshAccelerationCount!: number;
  harshBrakingCount!: number;
  overSpeedingCount!: number;
  powerFailureCount!: number;
  powerFailureScore!: number;
  fatigueEventColor: string = 'green';
  fovColor: string = 'green';

  distractionColor: string = 'green';
  forwardCollisionColor: string = 'green';
  harshAccelerationColor: string = 'green';
  overSpeedingColor: string = 'green';
  powerFailureColor: string = 'green';
  expiryStatus!: string;
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
  totalDrivingTime!: string;
  totalStandingTime!: string;
  totalDurationTime!: string;
  maxSpeed!: number;
  maxRPM!: number;
  vehicleHistory!: VehicleHistory[];
}
