import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { startsWith } from './router.utils';

import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { matcher: startsWith('hr'), component: WrapperComponent, data: { importName: 'hr', elementName: 'hr-element' }},
  { matcher: startsWith('produce'), component: WrapperComponent, data: { importName: 'produce', elementName: 'produce-element' }},
  { matcher: startsWith('inventory'), component: WrapperComponent, data: { importName: 'inventory', elementName: 'inventory-element' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
