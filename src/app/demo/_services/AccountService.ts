import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { AccountFilter } from '../_models/AccountFilter';
import { ManageAccount } from '../_models/ManageAccount';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  constructor() {
    super();
  }

  getAllAccounts(searchCriteria: SearchCriteria<AccountFilter>) {
    return this.apiHelper.get<ManageAccount[]>('/account/account-List');
  }

  updateAccount(account: ManageAccount) {
    return this.apiHelper.post<ManageAccount, any>(
      '/account/update-account',
      account
    );
  }

  addAccount(account: ManageAccount) {
    return this.apiHelper.post<ManageAccount, any>('/account/add', account);
  }

  inactive(user: ManageAccount) {
    return this.apiHelper.post<ManageAccount, ManageAccount>(
      '/account/inactive',
      user
    );
  }

  delete(user: ManageAccount) {
    return this.apiHelper.post<ManageAccount, ManageAccount>(
      '/account/delete',
      user
    );
  }

  getDeviceByAccountId(accountId: any) {
    return this.apiHelper.post<string, any[]>(
      '/account/getDevicesByAccount',
      accountId
    );
  }
}
