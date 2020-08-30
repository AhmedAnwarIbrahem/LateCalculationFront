import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import Employee from "../models/Employee";

@Injectable()
export class EmployeeService {
  baseURL = "http://localhost:44100/api/Employees";

  constructor(private http: HttpClient) {}

  getEmployees() {
    let path = `${this.baseURL}/GetAll`;
    return this.http.get(path);
  }

  createEmployee(employee: Employee) {
    return this.http.post(`${this.baseURL}/Add`, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.baseURL}/update`, employee);
  }
  getEmployeesById(id: number) {
    return this.http.get(`${this.baseURL}/Get/${id}`);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
