import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { BrandMaster } from '../_models/BrandMaster';

@Injectable()
export class BusBrandService extends BaseService {
  constructor() {
    super();
  }

  getAll() {
    return this.apiHelper.get<BrandMaster[]>('/vehicleBrand/brand-List');
  }

  add(grp: BrandMaster) {
    return this.apiHelper.post<BrandMaster, BrandMaster>('/gsm/add', grp);
  }

  inactive(grp: BrandMaster) {
    return this.apiHelper.post<BrandMaster, BrandMaster>('/gsm/inactive', grp);
  }
}
