import { Cart } from './../../model/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css']
})
export class SepetComponent implements OnInit {

  constructor(
    public cart: Cart,
  ) { }

  ngOnInit(): void {
  }

}
