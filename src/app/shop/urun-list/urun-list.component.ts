import { Urun } from './../../model/urun.model';
import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urun-list',
  templateUrl: './urun-list.component.html',
  styleUrls: ['./urun-list.component.css']
})
export class UrunListComponent implements OnInit {

  @Input() urunler: Urun[] = [];
  seciliUrun: Urun = null;

  constructor(
    private cart: Cart,
    private router: Router,) { }

  ngOnInit(): void {
  }
  SepeteEkle(u: Urun) {
    this.cart.urunEkle(u);
  }
  detay(urun: Urun) {
    this.seciliUrun = urun;
  }
  detaySakla() {
    this.seciliUrun = null;

  }

}
