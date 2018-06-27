import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-add-department',
    templateUrl: './addDepartment.component.html',
    styleUrls: ['./addDepartment.component.css']
})
export class AddDepartmentComponent implements OnInit {
    constructor(public data: DataService) {
    }

    addDepartment(f: NgForm): void {
        this.data.addDepartment(f);
    }
    ngOnInit() {}
}
