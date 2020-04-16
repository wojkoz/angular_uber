import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainViewItemImageComponent} from './main-view-item-image.component';

describe('MainViewItemImageComponent', () => {
  let component: MainViewItemImageComponent;
  let fixture: ComponentFixture<MainViewItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
