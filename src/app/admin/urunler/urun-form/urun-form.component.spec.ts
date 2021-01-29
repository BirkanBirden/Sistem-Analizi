import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunFormComponent } from './urun-form.component';

describe('UrunFormComponent', () => {
  let component: UrunFormComponent;
  let fixture: ComponentFixture<UrunFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
