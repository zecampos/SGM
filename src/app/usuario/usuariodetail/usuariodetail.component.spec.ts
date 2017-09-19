import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariodetailComponent } from './usuariodetail.component';

describe('UsuariodetailComponent', () => {
  let component: UsuariodetailComponent;
  let fixture: ComponentFixture<UsuariodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
