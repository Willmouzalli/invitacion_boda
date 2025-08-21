import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyBd } from './happy-bd';

describe('HappyBd', () => {
  let component: HappyBd;
  let fixture: ComponentFixture<HappyBd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyBd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyBd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
