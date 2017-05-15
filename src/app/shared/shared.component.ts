import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'my-shared',
  templateUrl:'./shared.html'
})
export class SharedComponent  { 
  name = 'Shared';
}
