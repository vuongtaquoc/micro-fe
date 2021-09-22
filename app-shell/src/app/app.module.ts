import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementWrapper } from './wrapper/element-wrapper';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElementWrapper,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ModuleFederationToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
