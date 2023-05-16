import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: any =[
    {
      id:1,
      name:'FORMULA',
    description:'',
      picture:'https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    date:''},
    {
      id:2,
      name:'CONCERT',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg',
    date:''},
    {
      id:3,
      name:'CONCERT',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_960_720.jpg',
    date:''},
    {
      id:4,
      name:'FOOTBALL',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_960_720.jpg',
    date:''},
    {
      id:5,
      name:'THEATRE',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg',
    date:''},
    {
      id:6,
      name:'CINEMA',
     description:'',
      picture:'https://cdn.pixabay.com/photo/2017/08/08/00/17/events-2609526_960_720.jpg',
    date:''},
    {
      id:7,
      name:'BASEBALL',
    description:'BASEBALL',
      picture:'https://cdn.pixabay.com/photo/2014/08/31/10/03/theater-432045_960_720.jpg',
    date:''},
    {
      id:8,
      name:'BASKETBALL',
    description:'',
      picture:'https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_960_720.jpg',
    date:''},
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getTicketList(data: any): any{
console.log(data);
    this.router.navigate(['/home/', data.id], {
      state: {
       value: data
      },
    });
  }

}
