import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';

import { EmployeelogService } from "./employeelog.service";
import { EmployeelogListComponent } from "./employeelog-list/employeelog-list.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { CreateEmployeelogComponent } from './create-employeelog/create-employeelog.component';

@NgModule({
  declarations: [
    EmployeelogListComponent,
    CreateEmployeelogComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
  ],
  exports: [],
  providers: [EmployeelogService]
})
export class EmployeelogModule {}
