import { LookupDetails } from "./lookupDetails";
import { Application } from "./Application";

export class TicketSearchFilter {
  name: string;
  mobileNumber: string;
  email: string;
  subject: string;
  fromDate?: Date;
  toDate?: Date;
  typeId: number;
  typeName: string;
  statusId: number;
  statusName: string;
  applicationId: string;
  subApplicationId: string;
  serviceId: string;
  subServiceId: string;
  priorityId: number;
  priorityName: string;
  referenceNumber: string;
  userId: string = null;
  cityId: number = null;
  statuses: number[];
} 
