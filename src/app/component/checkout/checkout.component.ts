import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  card: any;
  checkout: boolean;
  placeOrder: boolean;
  constructor() {
    this.checkout= true;
    this.placeOrder = false;
   }

  ngOnInit(): void {
  }
  plus(data: any): any{
    console.log(data);
  }

  minus(data: any): any{
    console.log(data);
  }
}
