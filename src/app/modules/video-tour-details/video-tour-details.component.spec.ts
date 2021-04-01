import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTourDetailsComponent } from './video-tour-details.component';

describe('VideoTourDetailsComponent', () => {
  let component: VideoTourDetailsComponent;
  let fixture: ComponentFixture<VideoTourDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTourDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
