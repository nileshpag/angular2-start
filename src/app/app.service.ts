import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getEmployeeList() {
        return this.http.get('http://localhost:5000/api/users?page=2').map((res:Response) => res.json());
    }
    getEmployeeDetails(id:any) {
        return this.http.get('http://localhost:5000/api/users/'+ Number(id)).map((res:Response) => res.json());
    }

     private missionAnnouncedSource = new Subject<string>();
        private missionConfirmedSource = new Subject<string>();
        // Observable string streams
        missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        missionConfirmed$ = this.missionConfirmedSource.asObservable();
        // Service message commands
        announceMission(mission: string) {
            this.missionAnnouncedSource.next(mission);
        }
        confirmMission(astronaut: string) {
            this.missionConfirmedSource.next(astronaut);
        }

}