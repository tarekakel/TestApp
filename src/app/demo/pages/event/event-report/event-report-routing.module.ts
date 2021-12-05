import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventReportComponent } from './event-report.component';


const routes: Routes = [
  {
    path: '',
    component: EventReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventReportRoutingModule { }
