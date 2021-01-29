import { SiparisRep } from './../../model/siparis.rep';
import { Component, OnInit } from '@angular/core';
import { Siparis } from 'src/app/model/siparis.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sepet-tamamla',
  templateUrl: './sepet-tamamla.component.html',
  styleUrls: ['./sepet-tamamla.component.css']
})
export class SepetTamamlaComponent implements OnInit {

  siparisVer: boolean = false;
  kaydedildi: boolean = false;
  constructor(public siparis: Siparis, public siparisRep: SiparisRep) { }

  ngOnInit(): void {
  }

  siparisKaydet(form: NgForm) {
    this.kaydedildi = true;
    if (form.valid) {
      this.siparisRep.siparisKaydet(this.siparis)
        .subscribe(siparis => {
          this.siparis.siparisTemizle();
          this.siparisVer = true;
          this.kaydedildi = false;
        })
    }


  }

}
