import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonUserComponent } from './skeleton-user.component';

describe('SkeletonUserComponent', () => {
  let component: SkeletonUserComponent;
  let fixture: ComponentFixture<SkeletonUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonUserComponent]
    });
    fixture = TestBed.createComponent(SkeletonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
