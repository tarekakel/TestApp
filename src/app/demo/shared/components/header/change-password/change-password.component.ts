import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../framework/core/base-component';
import { Language } from 'angular-l10n';
import { UserService } from '../../../service/UserService';
import { AlertMessageType } from '../../../../framework/view-models/enums';
import { User } from '../../../view-models/User';
import { tick } from '@angular/core/testing';
import { AuthService } from '../../../../framework/helpers/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [UserService]
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {
  @Language() lang: string;
  oldPassowrd: string='';
  newPassword: string = '';
  user:User;
  userName: string = JSON.parse(localStorage.getItem('currentUser')).user.Email;

  constructor(private userService: UserService,private authService: AuthService) { 
    super();
     this.user = new User();
  }

  ngOnInit() {
  }

  confirm() {
    this.user.username = this.userName;
    this.user.password = this.newPassword;
    this.user.oldPassword = this.oldPassowrd;
    this.userService.changePassword(this.user).subscribe(res => {
      if (res == null) {
        this.alertService.showAlertMessage(this.translationService.translate('Messages.WarningTitle'),
          this.translationService.translate('Messages.CheckOldPassword'), AlertMessageType.Error);
      }
      else {
        this.alertService.showAlertMessage(this.translationService.translate('Messages.SuccessTitle'),
          this.translationService.translate('Messages.PasswordChangedSuccessfully'), AlertMessageType.Success);
        this.authService.logout();
      }
    })
  }
}
