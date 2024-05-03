import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedJobsListComponent } from './posted-jobs-list.component';

describe('PostedJobsListComponent', () => {
  let component: PostedJobsListComponent;
  let fixture: ComponentFixture<PostedJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedJobsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
