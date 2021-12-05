import { ApiHelperService } from './../helpers/api-helper.service';
import { InjectorService } from './../helpers/injecter-service';

export class BaseService {
  apiHelper: ApiHelperService;

  constructor() {
    this.apiHelper = InjectorService.injector.get(ApiHelperService);
  }
}
