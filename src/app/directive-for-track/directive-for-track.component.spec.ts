import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveForTrackComponent } from './directive-for-track.component';

describe('DirectiveForTrackComponent', () => {
  let component: DirectiveForTrackComponent;
  let fixture: ComponentFixture<DirectiveForTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveForTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveForTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
