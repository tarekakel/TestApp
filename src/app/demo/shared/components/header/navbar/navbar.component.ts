import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../framework/helpers/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { of } from 'rxjs/observable/of';
import { UserService } from '../../../service/UserService';
import { MenuMaster } from '../../../../admin/view-models/MenuMaster';
import { BaseComponent } from '../../../../framework/core/base-component';
import { AlertMessageType } from '../../../../framework/view-models/enums';
import { MenuMasterDto } from '../../../../admin/view-models/MenuMasterDto';
import { User } from '../../../view-models/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService],
})
export class NavbarComponent extends BaseComponent implements OnInit {
  menus: MenuMasterDto[];
  current_role: string[];
  user: User;
  constructor(
    public authService: AuthService,
    private permissionsService: NgxPermissionsService,
    private userService: UserService
  ) {
    super();
    this.user = new User();
  }

  ngOnInit() {
    const perm = ['ADMIN', 'USER'];

    this.permissionsService.loadPermissions(perm);

    this.user.username = this.authService.getUsername();
    this.userService.getMenuByUserRole(this.user).subscribe(
      (res) => {
        this.menus = res;
        this.menus = this.menus.sort((a, b) =>
          a.menuName.localeCompare(b.menuName)
        );
        this.menus.forEach((item) => {
          if (item.subMenusList.length > 0)
            item.subMenusList.sort((a, b) =>
              a.subMenuName.localeCompare(b.subMenuName)
            );
        });
      },
      (error) => {
        this.alertService.showAlertMessage(
          this.translationService.translate('ErrorTitle'),
          this.translationService.translate(error.message),
          AlertMessageType.Error
        );
      }
    );
  }
}
