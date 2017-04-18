import { Component ,Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DemoService} from '../app.service';
@Component({
  selector: 'emp-details',
  templateUrl:'./empDetails.html' 
})
export class EmpDetailsComponent  { 
  name = 'Angular'; 
  empDetails:any=undefined;
  @Input() id: any=undefined;
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
      console.log(this.id);
      if(this.id!==undefined){
      this._demoService.getEmployeeDetails(this.id).subscribe(
      // the first argument is a function which runs on success
      data => { this.empDetails = data.data;
                console.log(this.empDetails);
              },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading list')
    )
      }
  }

   ngOnChanges(...args: any[]) {
       console.log(args);
    let id = Number(args[0]['id'].currentValue);
    if(this.id!==undefined){
    this._demoService.getEmployeeDetails(this.id).subscribe(
      // the first argument is a function which runs on success
      data => { this.empDetails = data.data;
                console.log(this.empDetails);
              },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading list')
    )
   }
   }
}
