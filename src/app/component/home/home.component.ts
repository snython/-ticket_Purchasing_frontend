import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: any =[
    {name:'',
      picture:'',
    date:''},
    {name:'',
      picture:'',
    date:''},
    {name:'',
      picture:'',
    date:''},
    {name:'',
      picture:'',
    date:''},
    {name:'',
      picture:'',
    date:''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
