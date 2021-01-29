import { Cart } from './../../model/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sepet-detay',
  templateUrl: './sepet-detay.component.html',
  styleUrls: ['./sepet-detay.component.css']
})
export class SepetDetayComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
