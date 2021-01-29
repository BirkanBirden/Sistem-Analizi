import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriListeComponent } from './kategori-liste.component';

describe('KategoriListeComponent', () => {
  let component: KategoriListeComponent;
  let fixture: ComponentFixture<KategoriListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
