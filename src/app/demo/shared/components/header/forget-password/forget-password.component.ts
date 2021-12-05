import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../framework/core/base-component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ForgetPasswordService } from '../../../service/ForgetPasswordService';
import { ConfirmationToken, ConfirmationTokenStatus } from '../../../view-models/ConfirmationToken';
import { Language } from 'angular-l10n';
import { User } from '../../../view-models/User';
import { error } from 'selenium-webdriver';
import { AlertMessageType } from '../../../../framework/view-models/enums';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent extends BaseComponent implements OnInit {

  @Language() lang: string;
  newPassword: string;
  confirmPassword: string;
  secretKey: string;
  isConfirmed: boolean = true;
  display: boolean = false;
  isUpdatedSuccessfully: boolean = false;
  router: Router;
  confirmationTokenStatus: ConfirmationTokenStatus;
  user: User;

  constructor(private route: ActivatedRoute,
    private forgetPasswordService: ForgetPasswordService) { super(); }

  ngOnInit() {

    this.user = new User();
    this.confirmationTokenStatus = new ConfirmationTokenStatus();
    this.route.params
      .subscribe((params: Params) => {

        if (params['key']) {
          this.secretKey = params['key'];
          this.forgetPasswordService.validateConfirmationToken(this.secretKey).subscribe(res => {
            this.confirmationTokenStatus = res;
            if (this.confirmationTokenStatus.isUsed || this.confirmationTokenStatus.isExpired || this.confirmationTokenStatus.notFound) {
              this.display = true;
            }
          });
        }
      });
  }

  checkConfirmedPassword() {
    if (this.confirmPassword) {
      if (this.confirmPassword != this.newPassword) {
        this.isConfirmed = false;
      }
      else { this.isConfirmed = true; }
    }
  }

  updatePassword() {

    if (this.isConfirmed) {

      this.forgetPasswordService.updatePassword(this.newPassword, this.secretKey).subscribe(res => {

        this.isUpdatedSuccessfully = true;
      },
        error => {
          this.alertService.showAlertMessage(this.translationService.translate('Messages.WarningTitle'),
            this.translationService.translate('Messages.UpdatePasswordFaild'), AlertMessageType.Error);
        }

      )
    }
  }

  closeDialog() {
    this.router.navigate(['/login']);

  }

}


