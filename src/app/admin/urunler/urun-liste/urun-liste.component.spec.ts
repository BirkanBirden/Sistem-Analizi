import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunListeComponent } from './urun-liste.component';

describe('UrunListeComponent', () => {
  let component: UrunListeComponent;
  let fixture: ComponentFixture<UrunListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
