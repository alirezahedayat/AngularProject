import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employees =  new Array<Employee>();
    this.employeeService.getEmployees()
      .subscribe( data => {
      const result = data.data
      result.forEach(e => {
        this.employees.push(e);
    });
      });
  };

  deleteEmployee(employee: Employee): void {
    this.employeeService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
        alert("Employee deleted successfully.");
      })
  };

}