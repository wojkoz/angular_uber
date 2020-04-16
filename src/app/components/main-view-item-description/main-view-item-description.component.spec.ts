import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainViewItemDescriptionComponent} from './main-view-item-description.component';

describe('MainViewItemDescriptionComponent', () => {
  let component: MainViewItemDescriptionComponent;
  let fixture: ComponentFixture<MainViewItemDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewItemDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
