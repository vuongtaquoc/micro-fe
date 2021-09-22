import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    matcher: startsWith('hr'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'hr',
      exposedModule: './web-components',
      elementName: 'hr-element',
    } as WebComponentWrapperOptions
  },
  {
    matcher: startsWith('produce'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'produce',
      exposedModule: './web-components',
      elementName: 'produce-element',
    } as WebComponentWrapperOptions
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
