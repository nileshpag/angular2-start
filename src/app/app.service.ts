import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getEmployeeList() {
        return this.http.get('http://localhost:5000/api/users?page=2').map((res:Response) => res.json());
    }

}