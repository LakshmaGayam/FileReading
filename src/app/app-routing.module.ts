import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchfilesComponent } from './searchfiles/searchfiles.component';

const routes: Routes = [
  {
    path:'' ,component:LoginComponent
  },
  {
    path:'home' ,component:HomeComponent , canActivate: [AuthGuard] 
  },
  {
    path:'filesSearch' , component:SearchfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
