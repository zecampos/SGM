import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitanteeditComponent } from './visitanteedit.component';

describe('VisitanteeditComponent', () => {
  let component: VisitanteeditComponent;
  let fixture: ComponentFixture<VisitanteeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitanteeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitanteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
