import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { MediDownloadRequest } from '../_models/MediaDownloadRequest';
import { MediaDownloadRequestDto } from '../_models/MediadRequestDownloadDto';
import { MediaRequestDownloadFilter } from '../_models/MediaRequestDownloadFilter';

@Injectable({
  providedIn: 'root',
})
export class MediaRequestDownloadService extends BaseService {
  constructor() {
    super();
  }
  // tslint:disable-next-line: typedef
  getAll(searchCriteria: any) {
    return this.apiHelper.post<
      SearchCriteria<MediaRequestDownloadFilter>,
      MediaDownloadRequestDto
    >('/media/search-download-request/', searchCriteria);
  }

  addNewDownloadRequest(data: MediDownloadRequest): any {
    return this.apiHelper.get(`/media/add`);
  }

  exportAll(filter: any): any {
    return this.apiHelper.post(`/media/export-all`, filter);
  }
}
