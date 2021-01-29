import { KategoriRepository } from './kategori.rep';
import { Siparis } from './siparis.model';
import { Kategori } from './kategori.model';
import { Urun } from './urun.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {

  baseUrl = 'http://localhost:9999/';

  constructor(private http: HttpClient) { }

  urunGetir(): Observable<Urun[]> {
    return this.http.get<Urun[]>(this.baseUrl + 'urunler');
  }

  kategoriGetir(): Observable<Kategori[]> {

    return this.http.get<Kategori[]>(this.baseUrl + 'kategoriler');
  }

  siparisKaydet(siparis: Siparis): Observable<Siparis> {
    return this.http.post<Siparis>(this.baseUrl + 'siparis', siparis);

  }

  urunEkle(urun: Urun): Observable<Urun> {
    return this.http.post<Urun>(this.baseUrl + 'urunler', urun);
  }

  kategoriEkle(kategori: Kategori): Observable<Kategori> {
    return this.http.post<Kategori>(this.baseUrl + 'kategoriler', kategori);
  }

  urunGuncelle(urun: Urun): Observable<Urun> {
    return this.http.put<Urun>(this.baseUrl + 'urunler/' + urun.id, urun);
  }

  kategoriGuncelle(kategori: Kategori) {
    return this.http.put<Kategori>(this.baseUrl + 'kategoriler/' + kategori.id, kategori)
  }


  urunSil(urun: Urun): Observable<Urun> {
    return this.http.delete<Urun>(this.baseUrl + 'urunler/' + urun.id);
  }

  kategoriSil(kategori: Kategori): Observable<Kategori> {
    return this.http.delete<Kategori>(this.baseUrl + 'kategori/' + kategori.id);
  }

}
