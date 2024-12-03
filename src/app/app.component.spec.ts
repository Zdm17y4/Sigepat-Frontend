import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the '242CC341AAngularSigepatFrontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('242CC341AAngularSigepatFrontend');
=======
  it(`should have the '242CC341AAngularSigconFrontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('242CC341AAngularSigconFrontend');
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, 242CC341AAngularSigepatFrontend');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, 242CC341AAngularSigconFrontend');
>>>>>>> 080204e4518ebf483424d551e3ac855c90bea19d
  });
});
