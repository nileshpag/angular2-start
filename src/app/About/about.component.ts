import { Component } from '@angular/core';
import {DemoService} from '../app.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <my-shared></my-shared>`,
})
export class AboutComponent  { 
  name = 'About'; 
  constructor(private _demoService: DemoService){
     _demoService.missionAnnounced$.subscribe(
      mission => {
        alert(mission);
    })
  }
}
