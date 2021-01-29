import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunListComponent } from './urun-list.component';

describe('UrunListComponent', () => {
  let component: UrunListComponent;
  let fixture: ComponentFixture<UrunListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
