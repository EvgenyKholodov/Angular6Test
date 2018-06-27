import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Department} from '../../models/department';

@Component({
    selector: 'app-delete-department',
    templateUrl: './deleteDepartment.component.html',
    styleUrls: ['./deleteDepartment.component.css']
})
export class DeleteDepartmentComponent implements OnInit {
    constructor(public data: DataService) {
    }

    departments: Department[];

    deleteDepartment(department) {
        this.data.deleteDepartment(department.id)
            .subscribe((res) => {
                if (res === 1) {
                    this.departments = this.departments.filter((item => item.id !== department.id));
                }
            });
    }

    ngOnInit() {
        this.data.getDepartments()
            .then((data: Department[]) => {
                this.departments = data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
