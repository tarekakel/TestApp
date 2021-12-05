import { ConfirmationTokenType } from "./enums";

export class ConfirmationToken {

  email: string;
  secretkey: string; 
  isUsed: boolean;
  expirationDate: Date;
  details: string;
  confirmationTokenType: ConfirmationTokenType;

}

export class ConfirmationTokenStatus {

  isExpired: boolean;
  isUsed: boolean;
  notFound: boolean;

}



