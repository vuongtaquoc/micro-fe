import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { endsWith } from './router.utils';

import { MonitoringComponent } from './monitoring/monitoring.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';

const routes: Routes = [
  { matcher: endsWith('monitoring'), component: MonitoringComponent },
  { matcher: endsWith('timesheets'), component: TimesheetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
