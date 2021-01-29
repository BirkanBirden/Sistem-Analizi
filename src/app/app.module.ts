import { AdminModule } from './admin/admin.module';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { ShopComponent } from './shop/shop.component';
import { SepetDetayComponent } from './shop/sepet-detay/sepet-detay.component';
import { SepetTamamlaComponent } from './shop/sepet-tamamla/sepet-tamamla.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ShopModule,
    AppRoutingModule,
    RouterModule.forRoot([





    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
