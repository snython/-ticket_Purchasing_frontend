import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: any =[
    {name:'F1- FORMULA ONE ',
    description:'',
      picture:'https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    date:''},
    {name:'CONCERT',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg',
    date:''},
    {name:'CONCERT',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_960_720.jpg',
    date:''},
    {name:'',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_960_720.jpg',
    date:''},
    {name:'',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg',
    date:''},
    {name:'',
     description:'',
      picture:'https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg',
    date:''},
    {name:'',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_960_720.jpg',
    date:''},
    {name:'',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_960_720.jpg',
    date:''},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getTicketList(data: any): any{
console.log(data);
  }

}
