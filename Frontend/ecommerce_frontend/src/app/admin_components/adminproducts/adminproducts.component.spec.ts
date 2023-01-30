import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductsComponent } from './adminproducts.component';

describe('AdminproductsComponent', () => {
  let component: AdminproductsComponent;
  let fixture: ComponentFixture<AdminproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
