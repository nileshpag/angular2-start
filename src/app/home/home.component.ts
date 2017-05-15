import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <my-shared></my-shared>`
})
export class HomeComponent  { name = 'Home'; }
