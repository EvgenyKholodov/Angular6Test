import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  ActivatedRoute } from '@angular/router';
import { Department } from '../../models/department';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-get-department-user',
    templateUrl: './getDepartmentUsers.component.html',
    styleUrls: ['./getDepartmentUsers.component.css']
})
export class GetDepartmentUsersComponent implements OnInit {
    constructor(public data: DataService,
                private route: ActivatedRoute,
    ) {}

    departmentId: Number = 82;
    departments: Department[];
    employees: Employee[];

    updateData() {
        this.route.params.subscribe(params => {
            this.departmentId = +params['id'];
        });
        this.data.getDepartments()
            .then((data: Department[]) => {
                this.departments = data;
            })
            .catch((err) => {
                console.log(err);
            });
        this.data.getEmployees()
            .then((data: Employee[]) => {
                this.employees = data.filter(item => item.departmentId === this.departmentId);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    ngOnInit() {
        this.updateData();
    }
}
