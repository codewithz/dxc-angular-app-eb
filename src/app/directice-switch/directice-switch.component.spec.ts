import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecticeSwitchComponent } from './directice-switch.component';

describe('DirecticeSwitchComponent', () => {
  let component: DirecticeSwitchComponent;
  let fixture: ComponentFixture<DirecticeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecticeSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecticeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
