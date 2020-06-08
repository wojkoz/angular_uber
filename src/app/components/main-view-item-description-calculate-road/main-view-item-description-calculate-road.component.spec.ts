import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainViewItemDescriptionCalculateRoadComponent} from './main-view-item-description-calculate-road.component';

describe('MainViewItemDescriptionCalculateRoadComponent', () => {
  let component: MainViewItemDescriptionCalculateRoadComponent;
  let fixture: ComponentFixture<MainViewItemDescriptionCalculateRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewItemDescriptionCalculateRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewItemDescriptionCalculateRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
