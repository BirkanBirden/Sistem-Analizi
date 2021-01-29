import { KategoriListeComponent } from './kategoriler/kategori-liste/kategori-liste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { UrunListeComponent } from './urunler/urun-liste/urun-liste.component';
import { UrunFormComponent } from './urunler/urun-form/urun-form.component';
import { KategoriFormComponent } from './kategoriler/kategori-form/kategori-form.component';
import { SiparisListeComponent } from './siparis/siparis-liste/siparis-liste.component';


@NgModule({
  declarations: [AdminComponent, AuthComponent, UrunListeComponent, UrunFormComponent, KategoriListeComponent, KategoriFormComponent, SiparisListeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
