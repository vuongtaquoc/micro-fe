import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { endsWith } from './router.utils';

import { EmployeesComponent } from './employees/employees.component';
import { MembersBirthdayComponent } from './members-birthday/members-birthday.component';

const routes: Routes = [
  { matcher: endsWith('employees'), component: EmployeesComponent },
  { matcher: endsWith('members-birthday'), component: MembersBirthdayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
