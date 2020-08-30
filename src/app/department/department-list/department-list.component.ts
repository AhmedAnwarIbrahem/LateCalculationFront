import { DepartmentService } from "./../department.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


import Department from "../../models/Department";
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  departments: Department[] = [];
  isLoading: boolean = true;

  constructor(
    private department_service: DepartmentService,
    private toast: ToastrService,
  ) {}

  ngOnInit() {
    const refrence = this.department_service.getDepartments();
    refrence.subscribe((response: any) => {
      this.departments = response;
      this.isLoading = false;
      console.log("departments", this.departments);
    });
    console.log("departments", this.departments);
  }



  handleDelete(id) {
    const confirmed = confirm('Are You Sure You Wanna Delete This Item?');
    confirmed &&
    this.department_service.deleteDepartment(id)
    .subscribe(response => {
      this.departments = this.departments.filter(department => department.id != id);
      this.toast.success('Department Was Deleted');
    });
  }

}
