import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-video-tour',
  templateUrl: './video-tour.component.html',
  styleUrls: ['./video-tour.component.scss']
})
export class VideoTourComponent implements OnInit {
  video: any;
  name: any;
  type : string;
  filteredVideo : any;


  constructor(private httpClient: HttpClient, private router : ActivatedRoute) { 
  }
  ngOnInit(): void {
    this.router.params.subscribe(queryParams => {
      this.type = queryParams.id;
      this.loadDestinations();
    }); 
  }

  loadDestinations(){
    this.httpClient.get("./assets/json/video.json").subscribe(data =>{
      this.video = data;
      if(this.type == 'domestic')
        this.filteredVideo = this.video['Domestic'];
      else if (this.type == 'international')
        this.filteredVideo = this.video['International'];
      else
        this.filteredVideo = this.video['International'].concat( this.video['Domestic']);
    })
  }
}
