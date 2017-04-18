import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DemoService} from './app.service';
import { AppComponent }  from './app.component';
import {AboutComponent} from './About/about.component';
import {HomeComponent} from './home/home.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
@NgModule({
  imports:      [ BrowserModule ,routing,HttpModule],
  declarations: [ AppComponent ,AboutComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers:[DemoService]
})
export class AppModule { }
