import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetEmployeesComponent } from './get-employees/getEmployees.component';
import { AddDepartmentComponent } from './add-departmen/addDepartment.component';
import { DeleteDepartmentComponent } from './delete-department/deleteDepartment.component';
import { GetDepartmentUsersComponent } from './get-department-users/getDepartmentUsers.component';

const routes: Routes = [
  { path: 'employees', component: GetEmployeesComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'delete-department', component: DeleteDepartmentComponent },
  { path: 'get-department-users/:id', component: GetDepartmentUsersComponent },
  { path: '*', redirectTo: '/' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
