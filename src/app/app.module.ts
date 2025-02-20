import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { CancelComponent } from './cancel/cancel.component';
import {HttpClientModule} from '@angular/common/http';
import { FilteridComponent } from './filterid/filterid.component';
import { FilternameComponent } from './filtername/filtername.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   DashboardComponent,
   LoginComponent,
   BookComponent,
   EditComponent,
   ShowComponent,
   CancelComponent,
   FilteridComponent,
   FilternameComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
