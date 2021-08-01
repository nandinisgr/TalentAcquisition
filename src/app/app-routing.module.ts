import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'

import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';



import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { AddDepartmentsComponent } from './departments/add-departments/add-departments.component';
import { AddMenuuserComponent } from './Menu-User/add-menuuser/add-menuuser.component';
import { ListMenuuserComponent } from './Menu-User/list-menuuser/list-menuuser.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  //department
  { path: 'adddepartment', component: AddDepartmentsComponent, pathMatch: 'full' },
  { path: 'departmentlist', component: DepartmentsListComponent, pathMatch: 'full' },
  //menuUser
  { path: 'adddUser', component: AddMenuuserComponent, pathMatch: 'full' },
  { path: 'Userlist', component: ListMenuuserComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
