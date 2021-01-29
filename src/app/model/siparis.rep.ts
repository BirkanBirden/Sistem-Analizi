import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Siparis } from './siparis.model';

@Injectable()
export class SiparisRep {

  private siparis: Siparis[] = [];

  constructor(private restservis: RestService) { }

  siparisGetir(): Siparis[] {
    return this.siparis;
  }

  siparisKaydet(siparis: Siparis): Observable<Siparis> {

    return this.restservis.siparisKaydet(siparis);
  }
}
