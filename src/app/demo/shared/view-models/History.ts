import { AssignedTo } from "./AssignedTo";

export class History {
  id: string;
  idString: string;
  ticketId: string;
  details: string;
  statusId: number = 0;
  statusName: string;
  subject: string;
  createdBy: string;
  creationDate: Date;
  name: string;
  assignedTo: AssignedTo[];
  reasonId: number = null;
  reason: string;
  isExternalUser: boolean = false;
  sendNotification: boolean = true;
}
