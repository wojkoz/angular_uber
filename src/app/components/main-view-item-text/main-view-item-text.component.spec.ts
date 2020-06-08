import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainViewItemTextComponent} from './main-view-item-text.component';

describe('MainViewItemTextComponent', () => {
  let component: MainViewItemTextComponent;
  let fixture: ComponentFixture<MainViewItemTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainViewItemTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
