import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';

import Employeelog from "../../models/Employeelog";
import { EmployeelogService } from "./../employeelog.service";
import { EmployeeService } from "../../employee/employee.service";
import Employee from 'src/app/models/Employee';

@Component({
  selector: "app-create-employeelog",
  templateUrl: "./create-employeelog.component.html",
  styleUrls: ["./create-employeelog.component.css"]
})
export class CreateEmployeelogComponent implements OnInit {
  isDisabled = false;
  employeelog: Employeelog = new Employeelog();
  employees: Employee[] = [];
  employeelogId: number = null;

  constructor(
    private employeelogService: EmployeelogService, 
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.employeelogId = this.route.snapshot.params.id;
    this.getEmployees();
    this.employeelogId && this.getEmployeelog(this.employeelogId);
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((response: any) => {
      this.employees = response;
      console.log(this.employees);
    });
  }

  getEmployeelog(id: number) {
    
    this.employeelogService.getEmployeelogsById(id).subscribe((response:any) => {
      this.employeelog = response;
      // debugger;
      // this.employeelog.startDate = moment(this.employeelog.startDate).format("DD/MM/YYYY");
      // this.employeelog.endDate = moment(this.employeelog.endDate).format("DD/MM/YYYY");
      console.log(this.employeelog);
    });
  }

  handleSubmit() {
    this.isDisabled = true;
    if(this.employeelog.employeeId == 0 || this.employeelog.employeeId == null){
      this.toastr.error('Please Select Employee First');
      return;
    }

    this.employeelogId ? this.handleEdit() : this.handleCreate();
  }

  handleCreate() {
    debugger;
    this.employeelogService.createEmployeelog(this.employeelog).subscribe(response => {
      this.toastr.success("log Created Successfully");
      this.employeelog = new Employeelog();
      this.isDisabled = false;
      this.router.navigate(['/employeelogs/']);
    });
  }

  handleEdit() {
    debugger;
    this.employeelogService.updateEmployeelog(this.employeelog).subscribe(response => {
      console.log(response);
      this.router.navigate(['/employeelogs/']);
    })
  }
}
