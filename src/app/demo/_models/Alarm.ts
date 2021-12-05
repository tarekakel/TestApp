export class Alarm {
  id?: number;
  deviceId?: string;
  gpsTime?: Date;
  altitude?: number;
  direction?: number;
  latitude?: number;
  longitude?: number;
  speed?: number;
  recordSpeed?: number;
  state?: number;
  time?: Date;
  type?: number;
  alarmContent?: string;
  alarmType?: string;
  cmdType?: string;
}
