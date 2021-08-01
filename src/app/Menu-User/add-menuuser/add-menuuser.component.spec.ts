import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuuserComponent } from './add-menuuser.component';

describe('AddMenuuserComponent', () => {
  let component: AddMenuuserComponent;
  let fixture: ComponentFixture<AddMenuuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
