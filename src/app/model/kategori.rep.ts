import { RestService } from './rest.service';
import { Kategori } from './kategori.model';
import { Injectable, OnInit } from '@angular/core';


@Injectable()

export class KategoriRepository {
  private kategoriler: Kategori[] = [];

  constructor(private restServis: RestService) {
    this.restServis
      .kategoriGetir()
      .subscribe(kategoriler => this.kategoriler = kategoriler);
  }



  kategoriGetir(id: number): Kategori {
    return this.kategoriler.find(a => a.id == id);
  }
  kategorilerGetir(): Kategori[] {
    return this.kategoriler;
  }

  kategoriKaydet(kategori: Kategori) {
    if (kategori.id == null || kategori.id == 0) {
      this.restServis.kategoriEkle(kategori)
        .subscribe(p => this.kategoriler.push(p))
    } else {
      this.restServis.urunGuncelle(kategori)
        .subscribe(p => {
          this.kategoriler.splice(this.kategoriler.findIndex(p => p.id == kategori.id), 1, kategori)
        })
    }
  }

  katSil(kategori: Kategori) {
    this.restServis.kategoriSil(kategori)
      .subscribe(u => this.kategoriler.splice(this.kategoriler.findIndex(p => p.id == kategori.id), 1))

  }

}
