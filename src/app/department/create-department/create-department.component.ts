import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';

import Department from "../../models/Department";
import { DepartmentService } from "./../department.service";

@Component({
  selector: "app-create-department",
  templateUrl: "./create-department.component.html",
  styleUrls: ["./create-department.component.css"]
})
export class CreateDepartmentComponent implements OnInit {
  isDisabled = false;
  department: Department = new Department();
  departmentId: number = null;

  constructor(
    private departmentService: DepartmentService, 
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.departmentId = this.route.snapshot.params.id;
    this.departmentId && this.getDepartment(this.departmentId);
  }



  getDepartment(id: number) {
    this.departmentService.getDepartmentsById(id).subscribe((response:any) => {
      this.department = response;
      console.log(this.department);
    });
  }

  handleSubmit() {
    this.isDisabled = true;
    this.departmentId ? this.handleEdit() : this.handleCreate();
  }

  handleCreate() {
    this.departmentService.createDepartment(this.department).subscribe(response => {
      this.toastr.success("Department Created Successfully");
      this.department = new Department();
      this.isDisabled = false;
      this.router.navigate(['/departments/']);
    });
  }

  handleEdit() {
    this.departmentService.updateDepartment(this.department).subscribe(response => {
      console.log(response);
      this.router.navigate(['/departments/']);
    })
  }
}
