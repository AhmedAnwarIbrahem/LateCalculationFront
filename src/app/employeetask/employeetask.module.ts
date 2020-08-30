import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';

import { EmployeetaskService } from "./employeetask.service";
import { EmployeetaskListComponent } from "./employeetask-list/employeetask-list.component";
import { CreateEmployeetaskComponent } from "./create-employeetask/create-employeetask.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeetaskListComponent,
    CreateEmployeetaskComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    RouterModule,
  ],
  exports: [],
  providers: [EmployeetaskService]
})
export class EmployeetaskModule {}
