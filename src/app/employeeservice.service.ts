import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Designation } from './designation';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private baseUrl=environment.myurl;
  constructor(private httpClient:HttpClient) { }

  createEmployee(employeeForm:FormGroup):Observable<Object>{
    return this.httpClient.post(this.baseUrl+"/employee/setEmployeeDetails",employeeForm)
  }

  getDesignationList():Observable< Designation[]>{
    return this.httpClient.get< Designation[]>(this.baseUrl+"/emp/get");
  }

}
