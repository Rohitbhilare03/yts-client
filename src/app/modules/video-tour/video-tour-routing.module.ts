import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoTourDetailsComponent } from '../video-tour-details/video-tour-details.component';
import { VideoTourComponent } from './video-tour.component';

const routes: Routes = [
  {
    path: '',
    component: VideoTourComponent,
    children:[
      {
        path: ':name',
        component: VideoTourDetailsComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoTourRoutingModule { }
