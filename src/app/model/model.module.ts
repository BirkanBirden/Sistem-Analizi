import { SiparisRep } from './siparis.rep';
import { Siparis } from './siparis.model';
import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { KategoriRepository } from './kategori.rep';
import { UrunRepository } from './urun.rep';
import { RestService } from './rest.service';




@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, UrunRepository, KategoriRepository, Cart, Siparis, SiparisRep]
})

export class ModelModule { }
