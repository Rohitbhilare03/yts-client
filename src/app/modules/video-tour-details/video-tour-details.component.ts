import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-video-tour-details',
  templateUrl: './video-tour-details.component.html',
  styleUrls: ['./video-tour-details.component.scss']
})
export class VideoTourDetailsComponent implements OnInit {
  video: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(){
    this.httpClient.get("./assets/json/video.json").subscribe(data =>{
      console.log(data);
      this.video = data;
      console.log(this.video.Domestic);
      
    })
  }

}
