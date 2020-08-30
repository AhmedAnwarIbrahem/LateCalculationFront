import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';

import { DepartmentService } from './department.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DepartmentListComponent,
    CreateDepartmentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
  ],
  providers: [
    DepartmentService
  ],
  exports: [
  ]
})
export class DepartmentModule { }
