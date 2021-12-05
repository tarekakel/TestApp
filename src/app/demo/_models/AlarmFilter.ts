export class AlarmFilter {
  startDate: Date | undefined;
  endDate: Date | undefined;
  alarmTypeCode?: number;
  vehicleCode: number | undefined;
  dateOfToday: Date | undefined;
  subEventTypeCode: number | undefined;
  IsAcknowledged: boolean | undefined;
  vehicleRegistration: string | undefined;
  lastSynchDate: string | undefined;
  driverTypeCode: number | undefined;
  unknownDriver: boolean | undefined;
  vehicleCodes: number[] | undefined;
  alarmTypeCodes: number[] | undefined;
  driverCodes: number[] | undefined;
}
