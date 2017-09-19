import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantelistComponent } from './visitantelist.component';

describe('VisitantelistComponent', () => {
  let component: VisitantelistComponent;
  let fixture: ComponentFixture<VisitantelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitantelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
