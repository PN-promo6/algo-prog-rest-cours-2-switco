import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data-service/data.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({

  declarations: [
    AppComponent,
    PostsListComponent,
    PostPreviewComponent,
    UsersListComponent,
    UserPreviewComponent,
    NavbarComponent
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
