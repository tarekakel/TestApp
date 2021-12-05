import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { SharedModule } from '../../../../theme/shared/shared.module';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TaskListRoutingModule,
    SharedModule,
    NgbDropdownModule,
    FormsModule,
  ],
  declarations: [TaskListComponent],
})
export class TaskListModule {}
