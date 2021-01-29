import { Urun } from './../../../model/urun.model';
import { UrunRepository } from './../../../model/urun.rep';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urun-liste',
  templateUrl: './urun-liste.component.html',
  styleUrls: ['./urun-liste.component.css']
})
export class UrunListeComponent implements OnInit {

  constructor(private urunrep: UrunRepository) { }

  ngOnInit(): void {
  }

  urunGetir(): Urun[] {
    return this.urunrep.urunlerGetir();
  }
  urunSil(urun: Urun) {
    this.urunrep.urunSil(urun);

  }
}
