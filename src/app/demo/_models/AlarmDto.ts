import { Alarm } from './Alarm';

export class AlarmDto {
  alarmList: Alarm[] = [];
  totalAlarms: number = 0;
  cover?: number;
  video_Loss?: number;
  motion_Detection?: number;
  storage_Exception?: string;
  panic_Alarm?: string;
  low_Speed?: string;
  high_Speed?: string;
  low_Voltage?: string;
  aCC?: string;
  fence?: string;
  illegal_Ignition?: string;
  illrgal_Shutdown?: string;
  temperature?: string;
  collision?: number;
  lane_Departure?: number;
  abnormal_Temperature_Changes?: string;
  abnormal_Boot_Up?: string;
  idle_Switch_Door?: string;
  car_License?: string;
}
