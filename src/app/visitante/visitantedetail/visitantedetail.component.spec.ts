import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantedetailComponent } from './visitantedetail.component';

describe('VisitantedetailComponent', () => {
  let component: VisitantedetailComponent;
  let fixture: ComponentFixture<VisitantedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
