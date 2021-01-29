import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SepetComponent } from './sepet/sepet.component';
import { SepetDetayComponent } from './sepet-detay/sepet-detay.component';
import { Router, RouterModule } from '@angular/router';
import { SepetTamamlaComponent } from './sepet-tamamla/sepet-tamamla.component';
import { UrunListComponent } from './urun-list/urun-list.component';




@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],

  declarations: [ShopComponent, NavbarComponent, SepetComponent, SepetDetayComponent, SepetTamamlaComponent, UrunListComponent,],
  exports: [ShopComponent]
})

export class ShopModule { }
