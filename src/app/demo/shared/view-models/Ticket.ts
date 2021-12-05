
import { LookupDetails } from "./lookupDetails";
import { Application } from "./Application";
import { AssignedTo } from "./AssignedTo";
import { SourceInfo } from "./SourceInfo";
import { CustomerProfile } from "./CustomerProfile";

export class Ticket {
  id: string;
  idString: string;
  profileId: string;
  name: string;
  email: string;
  mobileNumber: string;
  subject: string;
  details: string;
  assignedTo: AssignedTo[];
  lastStatusId: number;
  lastStatusName: string; 
  typeId: number;
  typeName: string;
  applicationId: string;
  priorityId: number;
  priorityName: string;
  createdBy: string;
  creationDate: Date;
  referenceNumber: string;
  sourceInfo: SourceInfo;
  serviceId: string;
  subApplicationId: string;
  subServiceId: string;
  expectedClosingTime: Date;
  isEscaled: boolean;
  isChecked: boolean;
  customerProfile: CustomerProfile;
}
