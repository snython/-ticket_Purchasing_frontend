import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cardOrderList: any=[
    {id:1,name:'dj khaled', qty:1, price:15, total:15, quantiteenstock:50},
  ];
  checkout: boolean;
  placeOrder: boolean;
  total: any=15;
  creditform: any;
  editCard: boolean;
  constructor(private fb: FormBuilder) {
    this.checkout= true;
    this.placeOrder = false;
    this.editCard = false;
   }

  ngOnInit(): void {
    this.creditform = this.fb.group({
      name: ['', [Validators.required]],
      cardname: ['', [Validators.required]],
      cardnumber: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.maxLength(3)]],
      expirationyear: ['', [Validators.required]],
      expirationmonth: ['', [Validators.required]],
      city:['',[Validators.required]],
      zipcode:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required]],
      state:['',[Validators.required]]
    });
  }

  checkoutAction(): any {
    console.log(this.creditform.value)
    this.checkout = false;
    this.placeOrder =true;
  }

  edit(): any{
    this.editCard = true;
  }

  delete(): any{}

  cancelOrder(): any {
    this.checkout = true;
    this.placeOrder =false;
  }

  minus(data: any): any{
    console.log(data);
    if(data.qty==1){
      return;
    }
    this.cardOrderList.forEach( (item:any, index:any) => {
      if(item.id === data.id) {
        // console.log(item.idproduitrestau, item.qty);
        item.qty = item.qty - 1;
        // console.log(item.idproduitrestau, item.qty);
        item.total = item.price * item.qty;
        this.total = this.total - item.price;
        this.showUpdatedItem(item);
      }
    });
  }

  plus(data: any): any{
    console.log(data);
    if(data.qty == data.quantiteenstock){
      return;
    }
    this.cardOrderList.forEach( (item:any, index:any) => {
      if(item.id === data.id) {
        console.log(item.idproduitrestau, item.qty);
        item.qty = item.qty + 1;
        item.total = item.price * item.qty;
        console.log(item.idproduitrestau, item.qty);
        this.total = this.total + item.price;
        this.showUpdatedItem(item);
      }
    });
  }
  showUpdatedItem(newItem:any){
    let indexToUpdate = this.cardOrderList.findIndex((item:any) => item.id === newItem.id);
    this.cardOrderList[indexToUpdate] = newItem;

   this.cardOrderList = Object.assign([], this.cardOrderList);
  }

  numbersonly(val: any): any {
    const y = this.creditform.controls['expirationyear'];
    this.creditform.controls['expirationyear'].patchValue(
      y.value.replace(/[^0-9]/g, '')
    );
  }

  numbersonly2(val: any): any {
    const y = this.creditform.controls['cvv'];
    this.creditform.controls['cvv'].patchValue(
      y.value.replace(/[^0-9]/g, '')
    );
  }
}
