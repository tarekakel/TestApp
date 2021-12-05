import { VehicleDto } from './VehicleDto';

export class DashboardDataDto {
  monthsList: string[] = [];
  violationsList: number[] = [];
  dashboardDataList: any[] = [];
  vehicleList: VehicleDto[] = [];
  vehicleCount!: number;
  onlineCount!: number;
  processedViolationCount!: number;
  unProcessedViolationCount!: number;
  validatedViolationCount!: number;
  totalDeviceCount!: number;
  onlineDeviceCount!: number;
  offlineDeviceCount!: number;
  notReportingDeviceCount!: number;
  idleVehicleCount!: number;
  movingVehicles!: number;
  stoppedVehicles!: number;
  violationCount!: number;
  alarms: number[] = [];
}
export class VehiclesStatsics {
  total!: number;
  idle!: number;
  moving!: number;
  stopped!: number;
  notReporting!: number;
}

export class ViolationsStatsics {
  total!: number;
  totalProcessed!: number;
  stopArm!: number;
  totalValidate!: number;
  safeZone!: number;
}

export class AlarmsStatsics {
  total = 0;
  cameraCover = 0;
  videoLoss = 0;
  storageException = 0;
  abnormalBootUp = 0;
}

export class DeviceStatsics {
  total = 0;
  totalOnline = 0;
  totalOffline = 0;
}

export class ViolationDashboardChart {
  date!: Date;
  violationType!: string;
  Total = 0;
}
