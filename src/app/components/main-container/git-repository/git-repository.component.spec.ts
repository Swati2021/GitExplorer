import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepositoryComponent } from './git-repository.component';

describe('GitRepositoryComponent', () => {
  let component: GitRepositoryComponent;
  let fixture: ComponentFixture<GitRepositoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitRepositoryComponent]
    });
    fixture = TestBed.createComponent(GitRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
