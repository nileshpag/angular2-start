import { Component ,Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {DemoService} from '../app.service';
@Component({
  selector: 'add-emp',
  templateUrl:'./addemp.html' 
})
export class AddEmpComponent  {
    @Output('addEmp') addEmp: EventEmitter < any > = new EventEmitter();
    user:any={
    name:"",
    password:""
    }
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
  }

  onAddEmp(){
      this.addEmp.emit(this.user);
  }
}
