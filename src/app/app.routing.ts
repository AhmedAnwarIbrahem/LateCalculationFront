import { RouterModule, Routes } from "@angular/router";

import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeelogListComponent } from './employeelog/employeelog-list/employeelog-list.component';
import { CreateEmployeelogComponent } from './employeelog/create-employeelog/create-employeelog.component';

const appRoutes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/create', component: CreateEmployeeComponent },
    { path: 'employees/edit/:id', component: CreateEmployeeComponent },

    { path: 'employees/:empId/logs', component: EmployeelogListComponent },


    { path: 'employeelogs', component: EmployeelogListComponent },
    { path: 'employeelogs/create', component: CreateEmployeelogComponent },
    { path: 'employeelogs/edit/:id', component: CreateEmployeelogComponent },

 ];

 export const appRouting = RouterModule.forRoot(appRoutes);