import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { ScoreSetupFilter } from '../_models/ScoreSetupFilter';
import { ScoreSetup } from '../_models/ScoreSetup';
import { ScoreSetupDto } from '../_models/ScoreSetupDto';

@Injectable()
export class ScoreSetupService extends BaseService {
  constructor() {
    super();
  }

  // GetScoreSetup(searchCriteria: SearchCriteria<ScoreSetupFilter>) {

  //   return this.apiHelper.post<SearchCriteria<ScoreSetupFilter>, PagedResult<ScoreSetupFilter>>("/scoresetup/search", searchCriteria);
  // }
  GetScoreSetup() {
    return this.apiHelper.get<ScoreSetupDto[]>('/scoresetup/getScoreSetUp');
  }
  getAllSetup(searchCriteria: SearchCriteria<ScoreSetupFilter>) {
    return this.apiHelper.get<ScoreSetup[]>('/scoresetup/getall');
  }
  getEventtypes() {
    return this.apiHelper.get<any>('/event/get-event-types');
  }
  addScoreSetup(scoresetup: string[]) {
    return this.apiHelper.post<any, any>(
      '/scoresetup/addScoreSetup',
      scoresetup
    );
  }
}
