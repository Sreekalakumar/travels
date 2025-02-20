import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { CancelComponent } from './cancel/cancel.component';
import { FilteridComponent } from './filterid/filterid.component';
import { FilternameComponent } from './filtername/filtername.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
     { path: 'login', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'book', component: BookComponent },
   { path: 'edit', component: EditComponent },
   { path: 'show', component: ShowComponent },
   { path: 'cancel', component:CancelComponent },
   { path: 'filterid', component:FilteridComponent },
   { path: 'filtername', component:FilternameComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
