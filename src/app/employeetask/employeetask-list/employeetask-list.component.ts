import { EmployeetaskService } from "./../employeetask.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

import Employeetask from "../../models/Employeetask";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-employeetask-list",
  templateUrl: "./employeetask-list.component.html",
  styleUrls: ["./employeetask-list.component.css"]
})
export class EmployeetaskListComponent {
  employeetasks: Employeetask[] = [];
  isLoading: boolean = true;
  employeeId: number = null;

  constructor(
    private employeetask_service: EmployeetaskService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.params.empId;

    if(this.employeeId != null){
      const refrence = this.employeetask_service.getEmployeetaskByEmpId(this.employeeId);
      refrence.subscribe((response: any) => {
        this.employeetasks = response;
        this.isLoading = false;
        console.log("emplyeeTasks", this.employeetasks);
      });
    }
    else{
      const refrence = this.employeetask_service.getEmployeetasks();
      refrence.subscribe((response: any) => {
        this.employeetasks = response;
        this.isLoading = false;
        console.log("emplyeeTasks", this.employeetasks);
      });
    }


    console.log("employeeTasks", this.employeetasks);

  }

  handleDelete(id) {
    const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
    confirmed &&
    this.employeetask_service.deleteEmployeetask(id)
    .subscribe(response => {
      this.employeetasks = this.employeetasks.filter(employeetask => employeetask.id != id);
      this.toast.success('Task Was Deleted');
    });
  }
}
