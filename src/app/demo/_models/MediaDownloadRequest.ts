import { DownloadRequestStatus } from '../framework/view-models/enums';

export class MediDownloadRequest {
  id!: number;
  TaskId!: number;
  StartTime!: Date;
  EndTime!: Date;
  Status!: DownloadRequestStatus;
  RequestDate!: Date;
  FilePath!: string;
  UserId!: string;
  CarLicense!: string;
}
