import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchfilesComponent } from './searchfiles/searchfiles.component';

const routes: Routes = [
  {
    path:'' ,component:HomeComponent
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
