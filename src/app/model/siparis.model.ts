import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class Siparis {
  public id: number;
  public isim: string;
  public adres: string;
  public sehir: string;
  public telefon: number;
  public email: string;

  public gönderildi: boolean = false;

  constructor(public cart: Cart) {

  }

  siparisTemizle() {
    this.id = this.isim = this.adres = this.sehir = this.telefon = this.email = null;
    this.gönderildi = false;
    this.cart.temizle();

  }

}
