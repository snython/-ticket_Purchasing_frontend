import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  ticket: any =[{
    id:1,
    description: '',
    date:''
  }, {id:2, description: '', date:''},
  {id:3,description: '', date:''},
  {id:4, description:'', date:''}
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewbordereau(datas: any): any {
    console.log(datas);
    // this.selectedrowindex = datas.idbordereau;
    // this.router.navigate(['/home/', datas.idbordereau], {
    //   state: {
    //    bordereau: undefined
    //   },
    // });
  }

  plus(data: any): any{
    console.log(data);
  }

  minus(data: any): any{
    console.log(data);
  }

  checkout(data: any): any{}
}
