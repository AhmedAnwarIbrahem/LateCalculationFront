import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import Employeelog from "../models/Employeelog";

@Injectable()
export class EmployeelogService {
  baseURL = "http://localhost:5000/api/EmployeeLogs";

  constructor(private http: HttpClient) {}

  getEmployeelogs() {
    let path = `${this.baseURL}/GetAll`;
    return this.http.get(path);
  }

  getEmployeelogByEmpId(empId: number){
    debugger;
    return this.http.get(`${this.baseURL}/GetAllLogsByEmpId/${empId}`);
  }

  createEmployeelog(employeelog: Employeelog) {
    return this.http.post(`${this.baseURL}/Add`, employeelog);
  }

  updateEmployeelog(employeelog: Employeelog) {
    return this.http.put(`${this.baseURL}/Update`, employeelog);
  }
  getEmployeelogsById(id: number) {
    return this.http.get(`${this.baseURL}/Get/${id}`);
  }
  deleteEmployeelog(id: number) {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }

}
