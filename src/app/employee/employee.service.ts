import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from '../models/employee.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) {}

  private employeeUrl = 'http://dummy.restapiexample.com/api/v1';
  private corsHeaders = {
    origin: ["*"],
    headers: ['Origin', 'X-Requested-With', 'Content-Type'],
    credentials: true,
    additionalHeaders: ['access-control-allow-headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID'],
    additionalExposedHeaders: ['access-control-allow-headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID']
  };

  public getHeaders() {
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
}

  public getEmployees() {
    return this.http.get<any>(this.employeeUrl + "/employees");
  }

  public getEmployee(id) {
    return this.http.get<any>(this.employeeUrl + "/employee/"+ id);
  }

  public deleteEmployee(employee) {
    return this.http.delete(this.employeeUrl + "/delete/"+ employee.id);
  }

  public createEmployee(employee) {
    return this.http.post(this.employeeUrl + "/create",JSON.stringify(employee) );
  }

  public updateEmployee(employee) {
    return this.http.put(this.employeeUrl + "/update/"+ employee.id,JSON.stringify(employee));
  }

}
