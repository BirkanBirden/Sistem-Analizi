import { NgForm } from '@angular/forms';
import { UrunRepository } from './../../../model/urun.rep';
import { Urun } from './../../../model/urun.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-urun-form',
  templateUrl: './urun-form.component.html',
  styleUrls: ['./urun-form.component.css']
})
export class UrunFormComponent implements OnInit {

  duzenle: boolean = false;
  urun: Urun = new Urun();


  constructor(private activeRoute: ActivatedRoute, private urunRep: UrunRepository, private router: Router) {
    this.duzenle = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.duzenle)
      this.urun = urunRep.urunGetir(activeRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
  }
  kaydet(form: NgForm) {
    this.urunRep.urunKaydet(this.urun);
    this.router.navigateByUrl("admin/main/urunler");
  }

}
