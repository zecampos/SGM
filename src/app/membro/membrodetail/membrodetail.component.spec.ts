import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrodetailComponent } from './membrodetail.component';

describe('MembrodetailComponent', () => {
  let component: MembrodetailComponent;
  let fixture: ComponentFixture<MembrodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
