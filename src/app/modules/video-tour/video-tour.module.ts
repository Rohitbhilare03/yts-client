import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoTourRoutingModule } from './video-tour-routing.module';
import { VideoTourComponent } from './video-tour.component';
import { VideoTourDetailsComponent } from '../video-tour-details/video-tour-details.component';
import { SafePipe } from '../video-tour-details/safe.pipe';


@NgModule({
  declarations: [VideoTourComponent, VideoTourDetailsComponent, SafePipe],
  imports: [
    CommonModule,
    VideoTourRoutingModule
  ]
})
export class VideoTourModule { }
