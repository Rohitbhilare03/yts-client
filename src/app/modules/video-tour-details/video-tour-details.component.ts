import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-tour-details',
  templateUrl: './video-tour-details.component.html',
  styleUrls: ['./video-tour-details.component.scss']
})
export class VideoTourDetailsComponent implements OnInit {
  video: any;
  name: string;
  filteredVideo: any;
  videoList: any;
  selectedVideo: any;

  constructor(private httpClient: HttpClient, private router: ActivatedRoute) {

  // this.selectedVideo = 'https://www.youtube.com/embed/X9TBnP34JDA';
  this.selectedVideo = 'a3ICNMQW7Ok';
   }

  ngOnInit(): void {
    this.name = this.router.snapshot.paramMap.get('name');
    this.httpClient.get("./assets/json/video.json").subscribe(data =>{
      this.video = data;
      console.log(this.video);
      this.video = this.video['Domestic'].concat(this.video['International']);
      this.videoList = this.video.filter(each=>each.name.toLowerCase() == this.name.toLowerCase())[0].videos;
      console.log(this.videoList);
      
      // if(this.type == 'domestic')
      //   this.filteredVideo = this.video['Domestic'];
      // else if (this.type == 'international')
      //   this.filteredVideo = this.video['International'];
      // else
      //   this.filteredVideo = this.video['International'].concat( this.video['Domestic']);
      // console.log(this.filteredVideo);
      
    })
    
  }

  selectVideo(id){
    this.selectedVideo = 'https://www.youtube.com/embed/' + this.videoList.filter(each => each.id == id)[0].videoUrl;
    console.log(this.selectedVideo);
  }

}
