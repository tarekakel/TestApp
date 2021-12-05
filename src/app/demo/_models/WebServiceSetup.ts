export class WebServiceSetup {
  name!: string;
  lastSynchTime!: Date;
  lasItemId!: number;
  isFinished!: boolean;
  type!: number;
}

export class Logging {
  code!: string;
  message!: string;
  details!: string;
  extraInformation!: string;
  creationDate!: Date;
  tags!: string;
  logType!: number;
}
