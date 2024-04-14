import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonRepoComponent } from './skeleton-repo.component';

describe('SkeletonRepoComponent', () => {
  let component: SkeletonRepoComponent;
  let fixture: ComponentFixture<SkeletonRepoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonRepoComponent]
    });
    fixture = TestBed.createComponent(SkeletonRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
