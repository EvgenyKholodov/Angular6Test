import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Department } from '../models/department';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };

    links: any = {
        getEmployees: 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees',
        addDepartment: 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/',
        getDepartments: 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/',
        deleteDepartment: 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/'
    };
    element;

    getEmployees() {
        return this.http.get(this.links.getEmployees, this.httpOptions).toPromise();
    }

    addDepartment(f) {
        const department: Department = f.value;
        this.http.post(this.links.addDepartment, department, this.httpOptions)
            .subscribe((res) => {
                if (res) {
                    f.reset();
                }
            });
    }

    getDepartments() {
        return this.http.get(this.links.getDepartments).toPromise();
    }

    deleteDepartment(id) {
        this.element = event;
        return this.http.delete(`${this.links.deleteDepartment}` + id);
    }
}
