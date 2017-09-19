import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroeditComponent } from './membroedit.component';

describe('MembroeditComponent', () => {
  let component: MembroeditComponent;
  let fixture: ComponentFixture<MembroeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembroeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
