import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-view',
  templateUrl: './getEmployees.component.html',
  styleUrls: ['./getEmployees.component.css']
})
export class GetEmployeesComponent implements OnInit {
  constructor(public data: DataService) { }
  employees: Employee[];

  ngOnInit() {
    // this.employees = this.data.getEmployees();
    this.data.getEmployees()
      .then((data: Employee[]) => {
        this.employees = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
