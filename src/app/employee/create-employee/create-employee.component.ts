import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';

import Employee from "../../models/Employee";
import { EmployeeService } from "./../employee.service";
import { DepartmentService } from "../../department/department.service";
import Department from 'src/app/models/Department';

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  isDisabled = false;
  employee: Employee = new Employee();
  departments: Department[] = [];
  employeeId: number = null;

  constructor(
    private employeeService: EmployeeService, 
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.params.id;
    this.getDepartments();
    this.employeeId && this.getEmployee(this.employeeId);
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((response: any) => {
      this.departments = response;
      console.log(this.departments);
    });
  }

  getEmployee(id: number) {
    this.employeeService.getEmployeesById(id).subscribe((response:any) => {
      this.employee = response;
      this.employee.joinDate = moment(this.employee.joinDate).format("DD/MM/YYYY");
      console.log(this.employee);
    });
  }

  handleSubmit() {
    this.isDisabled = true;
    if(this.employee.departmentId == 0 || this.employee.departmentId == null){
      this.toastr.error('Please Select Department First');
      return;
    }

    this.employeeId ? this.handleEdit() : this.handleCreate();
  }

  handleCreate() {
    this.employeeService.createEmployee(this.employee).subscribe(response => {
      this.toastr.success("Employee Created Successfully");
      this.employee = new Employee();
      this.isDisabled = false;
      this.router.navigate(['/employees/']);
    });
  }

  handleEdit() {
    this.employeeService.updateEmployee(this.employee).subscribe(response => {
      console.log(response);
      this.router.navigate(['/employees/']);
    })
  }
}
