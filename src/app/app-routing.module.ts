import { SepetTamamlaComponent } from './shop/sepet-tamamla/sepet-tamamla.component';
import { SepetDetayComponent } from './shop/sepet-detay/sepet-detay.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'sepetdetay', component: SepetDetayComponent },
  { path: 'siparistamamla', component: SepetTamamlaComponent },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '** ', redirectTo: '/shop' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
