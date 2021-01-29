import { UrunListeComponent } from './urunler/urun-liste/urun-liste.component';
import { KategoriListeComponent } from './kategoriler/kategori-liste/kategori-liste.component';
import { SiparisListeComponent } from './siparis/siparis-liste/siparis-liste.component';
import { KategoriFormComponent } from './kategoriler/kategori-form/kategori-form.component';
import { UrunListComponent } from './../shop/urun-list/urun-list.component';

import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrunFormComponent } from './urunler/urun-form/urun-form.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, children: [
      { path: "urunler/:mode/:id", component: UrunFormComponent },
      { path: "urunler/:mode", component: UrunFormComponent },
      { path: "urunler", component: UrunListeComponent },
      { path: "kategoriler/:mode/:id", component: KategoriFormComponent },
      { path: "kategoriler/:mode", component: KategoriFormComponent },
      { path: "kategoriler", component: KategoriListeComponent },
      { path: "siparis", component: SiparisListeComponent },
    ]
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
