import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Department from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseURL = "http://localhost:44100/api/Departments";

  constructor(private http: HttpClient) {}
  
  getDepartments() {
    let path = `${this.baseURL}/GetAll`;
    return this.http.get(path);
  }

  createDepartment(department: Department) {
    return this.http.post(`${this.baseURL}/Add`, department);
  }

  updateDepartment(department: Department) {
    return this.http.put(`${this.baseURL}/Update`, department);
  }
  getDepartmentsById(id: number) {
    return this.http.get(`${this.baseURL}/Get/${id}`);
  }
  deleteDepartment(id: number) {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
