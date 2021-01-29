import { Cart } from './../model/cart.model';
import { Kategori } from './../model/kategori.model';
import { Urun } from './../model/urun.model';
import { KategoriRepository } from './../model/kategori.rep';
import { UrunRepository } from './../model/urun.rep';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',

})
export class ShopComponent {

  public seciliKategori: Kategori = null;
  public sayfaBasiUrun = 4;
  public seciliSayfa = 1;
  public seciliUrun: Urun[] = [];


  constructor(
    private urunRep: UrunRepository,
    private kategoriRep: KategoriRepository,
  ) { }


  get urunler(): Urun[] {
    let index = (this.seciliSayfa - 1) * this.sayfaBasiUrun;

    this.seciliUrun = this.urunRep
      .urunlerGetir(this.seciliKategori);
    return this.seciliUrun
      .slice(index, index + this.sayfaBasiUrun);
  }

  get kategoriler(): Kategori[] {
    return this.kategoriRep.kategorilerGetir();
  }

  get sayfalar(): number[] {
    return Array(
      Math.ceil(this.urunRep
        .urunlerGetir(this.seciliKategori).length / this.sayfaBasiUrun))
      .fill(0).map((a, i) => i + 1);
  }

  sayfaBoyutDegis(size: number) {
    this.sayfaBasiUrun = size;
    this.sayfaDegis(1)
  }

  sayfaDegis(u: number) {
    this.seciliSayfa = u;
  }

  kategoriDegis(yeniKategori?: Kategori) {
    this.seciliKategori = yeniKategori;
  }





}
