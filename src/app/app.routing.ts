import { RouterModule, Routes } from "@angular/router";

import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { EmployeetaskListComponent } from './employeetask/employeetask-list/employeetask-list.component';
import { CreateEmployeetaskComponent } from './employeetask/create-employeetask/create-employeetask.component';

const appRoutes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/create', component: CreateEmployeeComponent },
    { path: 'employees/edit/:id', component: CreateEmployeeComponent },

    { path: 'employees/:empId/tasks', component: EmployeetaskListComponent },


    { path: 'departments', component: DepartmentListComponent },
    { path: 'departments/create', component: CreateDepartmentComponent },
    { path: 'departments/edit/:id', component: CreateDepartmentComponent },

    { path: 'employeetasks', component: EmployeetaskListComponent },
    { path: 'employeetasks/create', component: CreateEmployeetaskComponent },
    { path: 'employeetasks/edit/:id', component: CreateEmployeetaskComponent },

 ];

 export const appRouting = RouterModule.forRoot(appRoutes);