import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { GetEmployeesComponent } from './get-employees/getEmployees.component';
import { AddDepartmentComponent } from './add-departmen/addDepartment.component';
import { DeleteDepartmentComponent } from './delete-department/deleteDepartment.component';
import { GetDepartmentUsersComponent } from './get-department-users/getDepartmentUsers.component';


@NgModule({
  declarations: [
    AppComponent,
    GetEmployeesComponent,
    AddDepartmentComponent,
    DeleteDepartmentComponent,
    GetDepartmentUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
