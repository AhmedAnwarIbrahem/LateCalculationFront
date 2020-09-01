import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from "./app.component";
import { appRouting } from './app.routing';

import { EmployeeModule } from "./employee/employee.module";
import { EmployeetaskModule } from "./employeetask/employeetask.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    appRouting,
    EmployeeModule,
    EmployeetaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
