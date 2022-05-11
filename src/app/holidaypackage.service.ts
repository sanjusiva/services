import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolidaypackageService {

  constructor() { }
  getData(){
    return{
      place:'South Korea',
      package:150000,
      days:3
    }
  }
  getInfo(){
      return[
        {place:'South Korea',package:150000,days:3},
        {place:'Dubai',package:180000,days:3},
        {place:'Italy',package:250000,days:2},
        {place:'Thailand',package:200000,days:3},
        {place:'Spain',package:600000,days:4}
      ];
  }
}
