import { Component } from '@angular/core';
import {HolidaypackageService} from './holidaypackage.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';
  content:string;
  cost:number;
  stay:number;
  holi:any;

  constructor(private holidaypackageService:HolidaypackageService){
    console.warn(this.holidaypackageService.getData());
    this.content=this.holidaypackageService.getData().place;
    this.cost=this.holidaypackageService.getData().package;
    this.stay=this.holidaypackageService.getData().days;
    this.holi=holidaypackageService.getInfo();

  }
}
