import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariolistComponent } from './usuariolist.component';

describe('UsuariolistComponent', () => {
  let component: UsuariolistComponent;
  let fixture: ComponentFixture<UsuariolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
