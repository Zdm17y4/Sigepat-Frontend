import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarPaqueteComponent } from './reservar-paquete.component';

describe('ReservarPaqueteComponent', () => {
  let component: ReservarPaqueteComponent;
  let fixture: ComponentFixture<ReservarPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservarPaqueteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
