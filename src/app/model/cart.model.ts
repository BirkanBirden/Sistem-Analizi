import { Injectable } from '@angular/core';
import { Urun } from './urun.model';

@Injectable()

export class Cart {

  public items: CartItem[] = [];
  public cartSayi: number = 0;
  public toplam: number = 0;

  urunEkle(urun: Urun, adet: number = 1) {
    let item = this.items.find(i => i.urun.id === urun.id);
    if (item != undefined) {
      item.adet += adet;
    } else {
      this.items.push(new CartItem(urun, adet));
    }
    this.hesapla();
  }

  adetGuncelle(urun: Urun, adet: number) {
    let item = this.items.find(i => i.urun.id === urun.id);
    if (item != undefined) {
      item.adet = adet;

    }
    this.hesapla();
  }

  hesapla() {
    this.cartSayi = 0;
    this.toplam = 0;

    this.items.forEach(item => {
      this.cartSayi += item.adet;
      this.toplam += (item.adet * item.urun.fiyat);
    });
  }

  urunSil(id: number) {
    let index = this.items.findIndex(i => i.urun.id === id);
    this.items.splice(index, 1);
    this.hesapla();


  }

  temizle() {
    this.cartSayi = 0;
    this.items = [];
    this.toplam = 0;
  }


}




export class CartItem {

  constructor(
    public urun: Urun,
    public adet: number,
  ) { }
}
