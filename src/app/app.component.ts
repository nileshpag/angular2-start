import { Component } from '@angular/core';
import {DemoService} from './app.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  templateUrl:'./app.html' 
})
export class AppComponent  { 
  name = 'Angular'; 
  myname:string = "Nilesh";
  empList:any[]=[];
  empId:number = undefined;  
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this._demoService.getEmployeeList().subscribe(
      // the first argument is a function which runs on success
      data => { this.empList = data.data;
                console.log(this.empList);
              },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading list')
    )
  }
  
   announce() {
    this._demoService.announceMission("mission");
   }
  showDetails(id:any){
    this.empId = id;
  }

  addEmp(event:any){
    this.empList.push(event);
  }
}
