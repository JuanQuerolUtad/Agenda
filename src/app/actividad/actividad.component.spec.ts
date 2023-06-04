import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActicidadComponent } from './actividad.component';

describe('ActividadComponent', () => {
  let component: ActicidadComponent;
  let fixture: ComponentFixture<ActicidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActicidadComponent]
    });
    fixture = TestBed.createComponent(ActicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
