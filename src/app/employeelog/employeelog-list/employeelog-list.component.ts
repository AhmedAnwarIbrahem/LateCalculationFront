import { EmployeelogService } from "../employeelog.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

import Employeelog from "../../models/Employeelog";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-employeelog-list",
  templateUrl: "./employeelog-list.component.html",
  styleUrls: ["./employeelog-list.component.css"]
})
export class EmployeelogListComponent {
  debugger;

  employeelogs: Employeelog[] = [];
  isLoading: boolean = true;
  employeeId: number = null;

  constructor(
    private employeelog_service: EmployeelogService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.params.empId;
    if(this.employeeId != null){
      const refrence = this.employeelog_service.getEmployeelogByEmpId(this.employeeId);
      refrence.subscribe((response: any) => {
        this.employeelogs = response;
        this.isLoading = false;
        console.log("emplyeelogs", this.employeelogs);
      });
    }
    else{
      const refrence = this.employeelog_service.getEmployeelogs();
      refrence.subscribe((response: any) => {
        this.employeelogs = response;
        this.isLoading = false;
        console.log("emplyeelogs", this.employeelogs);
      });
    }


    console.log("employeelogs", this.employeelogs);

  }

  handleDelete(id) {
    const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
    confirmed &&
    this.employeelog_service.deleteEmployeelog(id)
    .subscribe(response => {
      this.employeelogs = this.employeelogs.filter(employeelog => employeelog.id != id);
      this.toast.success('log Was Deleted');
    });
  }
}
