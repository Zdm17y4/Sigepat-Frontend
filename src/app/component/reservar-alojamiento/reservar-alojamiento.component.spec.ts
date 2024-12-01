import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarAlojamientoComponent } from './reservar-alojamiento.component';

describe('ReservarAlojamientoComponent', () => {
  let component: ReservarAlojamientoComponent;
  let fixture: ComponentFixture<ReservarAlojamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservarAlojamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
