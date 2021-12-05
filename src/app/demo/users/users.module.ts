import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FrmWizardComponent } from '../pages/form-elements/frm-wizard/frm-wizard.component';
import { WizardBasicComponent } from '../pages/form-elements/frm-wizard/wizard-basic/wizard-basic.component';
import { WizardNavbarLgComponent } from '../pages/form-elements/frm-wizard/wizard-navbar-lg/wizard-navbar-lg.component';
import { WizardNavbarLgIconComponent } from '../pages/form-elements/frm-wizard/wizard-navbar-lg-icon/wizard-navbar-lg-icon.component';
import { WizardCustomComponent } from '../pages/form-elements/frm-wizard/wizard-custom/wizard-custom.component';
import { WizardNavbarLeftComponent } from '../pages/form-elements/frm-wizard/wizard-navbar-left/wizard-navbar-left.component';
import { WizardNavbarRightComponent } from '../pages/form-elements/frm-wizard/wizard-navbar-right/wizard-navbar-right.component';
import { FrmWizardRoutingModule } from '../pages/form-elements/frm-wizard/frm-wizard-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { FormElementsRoutingModule } from '../pages/form-elements/form-elements-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FrmWizardRoutingModule,
    FormElementsRoutingModule,
    SharedModule,
    ArchwizardModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
