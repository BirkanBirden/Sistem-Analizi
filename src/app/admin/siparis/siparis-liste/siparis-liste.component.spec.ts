import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiparisListeComponent } from './siparis-liste.component';

describe('SiparisListeComponent', () => {
  let component: SiparisListeComponent;
  let fixture: ComponentFixture<SiparisListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiparisListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiparisListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
