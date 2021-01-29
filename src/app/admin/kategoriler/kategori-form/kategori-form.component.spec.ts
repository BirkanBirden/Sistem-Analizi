import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriFormComponent } from './kategori-form.component';

describe('KategoriFormComponent', () => {
  let component: KategoriFormComponent;
  let fixture: ComponentFixture<KategoriFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
