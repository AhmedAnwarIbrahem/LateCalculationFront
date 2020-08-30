import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import Employeetask from "../models/Employeetask";

@Injectable()
export class EmployeetaskService {
  baseURL = "http://localhost:44100/api/Employeetasks";

  constructor(private http: HttpClient) {}

  getEmployeetasks() {
    let path = `${this.baseURL}/GetAll`;
    return this.http.get(path);
  }

  getEmployeetaskByEmpId(empId: number){
    return this.http.get(`${this.baseURL}/GetAllTasksByEmpId/${empId}`);
  }

  createEmployeetask(employeetask: Employeetask) {
    return this.http.post(`${this.baseURL}/Add`, employeetask);
  }

  updateEmployeetask(employeetask: Employeetask) {
    return this.http.put(`${this.baseURL}/Update`, employeetask);
  }
  getEmployeetasksById(id: number) {
    return this.http.get(`${this.baseURL}/Get/${id}`);
  }
  deleteEmployeetask(id: number) {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }

}
