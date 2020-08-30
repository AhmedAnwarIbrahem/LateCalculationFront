import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';

import { EmployeeService } from "./employee.service";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
  ],
  exports: [],
  providers: [EmployeeService]
})
export class EmployeeModule {}
