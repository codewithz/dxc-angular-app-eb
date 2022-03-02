import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneGithubFollowerComponent } from './clone-github-follower.component';

describe('CloneGithubFollowerComponent', () => {
  let component: CloneGithubFollowerComponent;
  let fixture: ComponentFixture<CloneGithubFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneGithubFollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneGithubFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
