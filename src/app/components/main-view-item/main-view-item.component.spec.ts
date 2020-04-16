import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainViewItemComponent} from './main-view-item.component';

describe('MainViewItemComponent', () => {
  let component: MainViewItemComponent;
  let fixture: ComponentFixture<MainViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
