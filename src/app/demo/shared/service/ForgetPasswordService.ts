import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { Urls } from "../common/Api-Urls";
import { User } from "../view-models/User";
import { ConfirmationToken, ConfirmationTokenStatus } from "../view-models/ConfirmationToken";

@Injectable()
export class ForgetPasswordService extends BaseService {
  constructor() {
    super();
  }

  checkUserExist(user: User) {
    return this.apiHelper.post<User, any>(Urls.checkUserExistUrl, user);
  }

  sendConfirmationEmail(user: User) {
    return this.apiHelper.post<User, any>(Urls.sendConfirmationEmailUrl, user);
  }

  validateConfirmationToken(secretKey: string) {
    return this.apiHelper.get<ConfirmationTokenStatus>(Urls.validateConfirmationTokenUrl + '/' + secretKey);
  }

  updatePassword(password: string, secretKey: string) {
    return this.apiHelper.get<any>(Urls.updatePasswordUrl + '/' + password + '/' + secretKey);
  }

}
