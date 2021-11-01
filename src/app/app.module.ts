import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FilesComponent } from './files/files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SearchfilesComponent } from './searchfiles/searchfiles.component';
import { FilesService } from './services/files.service';
import { LoginComponent } from './login/login.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { DraganddropDirective } from './Directives/draganddrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilesComponent,
    SearchfilesComponent,
    LoginComponent,
    DraganddropDirective
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DatePipe,
    FilesService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
