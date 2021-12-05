import { DeviceModel } from './DeviceModel';

export class DeviceDto {
  deviceList: DeviceModel[] = [];
  totalDevices: number = 0;
  totalOffline: number = 0;
  totalOnline: number = 0;
}
