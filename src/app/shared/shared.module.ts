import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";
import {SharedComponent} from './shared.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [SharedComponent ],
  exports:[SharedComponent]
  
})
export class SharedModule { }
