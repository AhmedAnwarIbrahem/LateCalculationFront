import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';

import Employeetask from "../../models/Employeetask";
import { EmployeetaskService } from "./../employeetask.service";
import { EmployeeService } from "../../employee/employee.service";
import Employee from 'src/app/models/Employee';

@Component({
  selector: "app-create-employeetask",
  templateUrl: "./create-employeetask.component.html",
  styleUrls: ["./create-employeetask.component.css"]
})
export class CreateEmployeetaskComponent implements OnInit {
  isDisabled = false;
  employeetask: Employeetask = new Employeetask();
  employees: Employee[] = [];
  employeetaskId: number = null;

  constructor(
    private employeetaskService: EmployeetaskService, 
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.employeetaskId = this.route.snapshot.params.id;
    this.getEmployees();
    this.employeetaskId && this.getEmployeetask(this.employeetaskId);
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((response: any) => {
      this.employees = response;
      console.log(this.employees);
    });
  }

  getEmployeetask(id: number) {
    
    this.employeetaskService.getEmployeetasksById(id).subscribe((response:any) => {
      this.employeetask = response;
      // debugger;
      // this.employeetask.startDate = moment(this.employeetask.startDate).format("DD/MM/YYYY");
      // this.employeetask.endDate = moment(this.employeetask.endDate).format("DD/MM/YYYY");
      console.log(this.employeetask);
    });
  }

  handleSubmit() {
    this.isDisabled = true;
    if(this.employeetask.employeeId == 0 || this.employeetask.employeeId == null){
      this.toastr.error('Please Select Employee First');
      return;
    }
    if(moment(this.employeetask.startDate) >= moment(this.employeetask.endDate)){
      this.toastr.error('Please Select EndDate Greater Than StartDate');
      return;
    }
    this.employeetaskId ? this.handleEdit() : this.handleCreate();
  }

  handleCreate() {
    debugger;
    this.employeetaskService.createEmployeetask(this.employeetask).subscribe(response => {
      this.toastr.success("Task Created Successfully");
      this.employeetask = new Employeetask();
      this.isDisabled = false;
      this.router.navigate(['/employeetasks/']);
    });
  }

  handleEdit() {
    debugger;
    this.employeetaskService.updateEmployeetask(this.employeetask).subscribe(response => {
      console.log(response);
      this.router.navigate(['/employeetasks/']);
    })
  }
}
