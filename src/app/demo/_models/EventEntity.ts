export class EventEntity {
  code!: number;
  updateDate!: Date;
  lastOdoMeter!: number;
  registration!: string;
  locationTIme!: Date;
  latitude!: number;
  longitude!: number;
  vendorCode!: string;
  contractorCode!: number;
  driverCode!: number;
  vehicleCode!: number;
  eventTypeCode!: number;
  tripCode!: number;
  subTripCode!: number;
  endDate!: Date;
  startDate!: Date;
  startPositionCode!: string;
  endPositionCode!: string;
  //GUARDIAN
  //GUARDIAN
  duration!: number;
  serialNumber!: string;
  contractorName!: string;
  confirmationState!: string;
  detectedDateTime!: Date;
  alarms!: string;
  detectedPositionCode!: string;
  shift!: string;
  tracking!: string;
  travelDistance!: number;
  stationaryTime!: number;
  eventSource!: string;

  bearing!: string; // BEARING
  // BEARING
  tripTime!: Date; //TRIP TIME(H:M:S)
  //TRIP TIME(H:M:S)
  travel!: string; // TRAVEL
  // TRAVEL
  age!: number; // AGE
  // AGE
  speed!: number; // SPEED
  // SPEED
  timeIntoShift!: Date; //TIME INTO SHIFT
  //TIME INTO SHIFT
  gPSCoverage!: number; //GPS COVERAGE
  //GPS COVERAGE
}
