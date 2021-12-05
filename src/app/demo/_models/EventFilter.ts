export class EventFilter {
  startDate!: Date;
  endDate!: Date;
  eventTypeCode!: number;
  vehicleCode!: number;
  dateOfToday!: Date;
  subEventTypeCode!: number;
  IsAcknowledged: boolean | undefined;
  VehicleRegistration!: string;
  lastSynchDate!: string;
  driverTypeCode!: number;
  unknownDriver: boolean = false;
  vehicleCodes!: number[];
  eventTypeCodes!: number[];
  driverCodes!: number[];
  plateNumbers!: string[];
  groupCode!: number[];
  dataTablesParameters: any;
}
