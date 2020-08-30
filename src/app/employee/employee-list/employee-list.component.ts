import { EmployeeService } from "./../employee.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


import Employee from "../../models/Employee";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  isLoading: boolean = true;

  constructor(
    private employee_service: EmployeeService,
    private toast: ToastrService,
  ) {}

  ngOnInit() {
    const refrence = this.employee_service.getEmployees();
    refrence.subscribe((response: any) => {
      this.employees = response;
      this.isLoading = false;
      console.log("emplyees", this.employees);
    });
    console.log("emplyees", this.employees);
  }

  getname() {
    console.log("getname");
  }

  handleDelete(id) {
    const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
    confirmed &&
    this.employee_service.deleteEmployee(id)
    .subscribe(response => {
      this.employees = this.employees.filter(employee => employee.id != id);
      this.toast.success('Employee Was Deleted');
    });
  }
}
