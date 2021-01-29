import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public kuladi: string;
  public kulsifre: string;
  public errorMesaj: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  giris(form: NgForm) {
    if (form.valid) {
      if (this.kuladi === 'admin' && this.kulsifre === '123') {
        this.router.navigateByUrl('/admin/main');
      } else {
        this.errorMesaj = 'Hatalı kullanıcı adı yada şifre';
      }
    }
    else {
      this.errorMesaj = 'Bilgileri eksiksiz giriniz';
    }

  }
}
