import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { InvitacionComponent } from './invitacion.component';
import { of } from 'rxjs';

describe('InvitacionComponent', () => {
  let component: InvitacionComponent;
  let fixture: ComponentFixture<InvitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvitacionComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ nombre: 'nombre1-apellido', numero: '5' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct name and number of guests', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('nombre1-apellido');
    expect(compiled.querySelector('p:nth-child(3)').textContent).toContain('5');
  });
});

