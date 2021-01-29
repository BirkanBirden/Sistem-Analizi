import { KategoriRepository } from './../../../model/kategori.rep';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/model/kategori.model';

@Component({
  selector: 'app-kategori-liste',
  templateUrl: './kategori-liste.component.html',
  styleUrls: ['./kategori-liste.component.css']
})
export class KategoriListeComponent implements OnInit {

  constructor(private katRep: KategoriRepository) { }

  ngOnInit(): void {
  }

  kategoriGetir(): Kategori[] {
    return this.katRep.kategorilerGetir();
  }

  kategoriSil(kategori: Kategori) {
    this.katRep.katSil(kategori);
  }




}
