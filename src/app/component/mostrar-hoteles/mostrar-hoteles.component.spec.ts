import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarHotelesComponent } from './mostrar-hoteles.component';

describe('MostrarHotelesComponent', () => {
  let component: MostrarHotelesComponent;
  let fixture: ComponentFixture<MostrarHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarHotelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
