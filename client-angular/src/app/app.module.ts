import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data-service/data.service';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({

  declarations: [
    AppComponent,
    UsersListComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [
    DataService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
