export class DeviceFilter {
  startDate!: Date;
  endDate!: Date;
  plateNumbers!: string[];
  alarmTypeCode!: number;
  vehicleCode!: number;
  dateOfToday!: Date;
  subEventTypeCode!: number;
  IsAcknowledged!: boolean;
  vehicleRegistration!: string;
  lastSynchDate!: string;
  driverTypeCode!: number;
  unknownDriver: boolean = false;
  vehicleCodes!: number[];
  alarmTypeCodes!: number[];
  driverCodes!: number[];
  deviceNumbers!: string[];
}
