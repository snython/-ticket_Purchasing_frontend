import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

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
}
