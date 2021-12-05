import { MediDownloadRequest } from './MediaDownloadRequest';

export class MediaDownloadRequestDto {
  mediaDownloadRequestList: MediDownloadRequest[] = [];
  totalRequests!: number;
  totalWaiting!: number;
  totalFailed!: number;
  totalSuccess!: number;
}
