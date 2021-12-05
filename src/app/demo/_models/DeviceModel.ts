export class DeviceModel {
  deviceId!: string;
  carLicense!: string;
  terninalId!: string;
  sim!: string;
  channelCount!: string;
  cName!: string;
  plateColor!: string;
  groupId!: number;
  deviceType!: string;
  linkType!: string;
  deviceUsername!: string;
  devicePassword!: string;
  registerIp!: string;
  registerPort!: number;
  transmitIp!: string;
  transmitPort!: number;
  en!: number;
  lastCommandDate!: Date;
  online: boolean = false;
}
