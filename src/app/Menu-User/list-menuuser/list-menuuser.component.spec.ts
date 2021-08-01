import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuuserComponent } from './list-menuuser.component';

describe('ListMenuuserComponent', () => {
  let component: ListMenuuserComponent;
  let fixture: ComponentFixture<ListMenuuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenuuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
