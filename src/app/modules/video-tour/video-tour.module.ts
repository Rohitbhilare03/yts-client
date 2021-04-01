import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoTourRoutingModule } from './video-tour-routing.module';
import { VideoTourComponent } from './video-tour.component';
import { VideoTourDetailsComponent } from '../video-tour-details/video-tour-details.component';


@NgModule({
  declarations: [VideoTourComponent, VideoTourDetailsComponent],
  imports: [
    CommonModule,
    VideoTourRoutingModule
  ]
})
export class VideoTourModule { }
