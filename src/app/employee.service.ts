import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getEmpURL="https://springboot-ems-crud.herokuapp.com/api/v1/getEmployees";
  private postEmpURL="https://springboot-ems-crud.herokuapp.com/api/v1/addEmployee";
  private getEmpByIdURL="https://springboot-ems-crud.herokuapp.com/api/v1/getEmployee";
  private updateEmpURL="https://springboot-ems-crud.herokuapp.com/api/v1/updateEmployee";
  private deleteEmpURL="https://springboot-ems-crud.herokuapp.com/api/v1/deleteEmployee";

  private baseUrl="https://springboot-ems-crud.herokuapp.com";
  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.getEmpURL}`);
  }

createEmployee(employee:Employee):Observable<Object>{
  return this.httpClient.post(`${this.postEmpURL}`,employee)
}

getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.getEmpByIdURL}/${id}`);
}

updateEmployee(id:number,employee:Employee):Observable<Object>{
  return this.httpClient.put(`${this.updateEmpURL}/${id}`,employee)
}

deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.deleteEmpURL}/${id}`);
}

}
