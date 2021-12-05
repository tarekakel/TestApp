export class Vehicle {
  code!: number;
  updateDate!: Date;
  lastOdoMeter!: number;
  registration!: string;
  expiryDate!: Date;
  issueDate!: Date;
  model!: string;
  gps_UnitiId!: string;
  statusCode!: number;
  vin!: string;
  vehicleType: string = '';
  bodyType!: string;
  fuelType: string = '';
  engineCapacity!: number;
  enginePower!: string;
  engine!: string;
  bodyColor!: string;
  steeringSystem!: string;
  gearBoxCode!: string;
  gearboxType!: string;
  gearBox!: string;
  axle!: string;
  fuelConsumption!: number;
  modelCode!: string;
  brandCode!: string;

  latitude!: number;
  longitude!: number;
  lastUpdateLocationDate!: Date;

  critical!: boolean;
  elevated!: boolean;
  normal!: boolean;
  idle!: boolean;
  reporting!: boolean;
  //deviceId:string[];
  //deviceId:string[];
  sM_Serial_Number!: string;
  fmS_Serial_Number!: string;
  entityId!: string;

  carLicense!: string;
  // vehicleType:number;
  // vehicleType:number;
  chasisNumber!: string;
  deviceId!: string;
  online!: boolean;
  lastCommandDate!: Date;
  vehicleOwner!: string;
  installation_Date!: Date;
  callibration!: string;
  sim_IP_Address!: string;
  gruoupId!: number;
}
