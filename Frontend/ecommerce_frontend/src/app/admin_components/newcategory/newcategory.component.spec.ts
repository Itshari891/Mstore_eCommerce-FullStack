import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcategoryComponent } from './newcategory.component';

describe('NewcategoryComponent', () => {
  let component: NewcategoryComponent;
  let fixture: ComponentFixture<NewcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
