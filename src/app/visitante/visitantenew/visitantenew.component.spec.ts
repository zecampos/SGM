import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantenewComponent } from './visitantenew.component';

describe('VisitantenewComponent', () => {
  let component: VisitantenewComponent;
  let fixture: ComponentFixture<VisitantenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
