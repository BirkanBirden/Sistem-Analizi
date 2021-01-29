import { Kategori } from './kategori.model';
import { RestService } from './rest.service';
import { Urun } from './urun.model';
import { Injectable, OnInit } from '@angular/core';


@Injectable()

export class UrunRepository implements OnInit {
  private urunler: Urun[] = [];

  constructor(private restServis: RestService) {
    this.restServis
      .urunGetir()
      .subscribe(urunler => this.urunler = urunler);
  }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() { }

  urunGetir(id: number): Urun {
    return this.urunler.find(i => i.id == id);
  }

  urunlerGetir(kategori: Kategori = null): Urun[] {
    if (kategori) {
      return this.urunler.filter(u => u.kategori === kategori.isim);
    }
    else {
      return this.urunler;
    }
  }
  urunKaydet(urun: Urun) {
    if (urun.id == null || urun.id == 0) {
      this.restServis.urunEkle(urun)
        .subscribe(p => this.urunler.push(p))
    } else {
      this.restServis.urunGuncelle(urun)
        .subscribe(p => {
          this.urunler.splice(this.urunler.findIndex(p => p.id == urun.id), 1, urun)
        })
    }
  }

  urunSil(urun: Urun) {
    this.restServis.urunSil(urun)
      .subscribe(u => this.urunler.splice(this.urunler.findIndex(p => p.id == urun.id), 1))

  }
}
