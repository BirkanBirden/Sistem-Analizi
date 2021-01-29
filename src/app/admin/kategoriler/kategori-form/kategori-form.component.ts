import { RestService } from './../../../model/rest.service';
import { KategoriRepository } from './../../../model/kategori.rep';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kategori } from 'src/app/model/kategori.model';
import { UrunRepository } from 'src/app/model/urun.rep';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kategori-form',
  templateUrl: './kategori-form.component.html',
  styleUrls: ['./kategori-form.component.css']
})
export class KategoriFormComponent implements OnInit {

  duzenle: boolean = false;
  kategori: Kategori = new Kategori();


  constructor(private activeRoute: ActivatedRoute, private katRep: KategoriRepository, private router: Router) {
    this.duzenle = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.duzenle)
      this.kategori = katRep.kategoriGetir(activeRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
  }
  kaydet(form: NgForm) {
    this.katRep.kategoriKaydet(this.kategori);
    this.router.navigateByUrl("admin/main/kategoriler");
  }

}
