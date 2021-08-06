import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  destination: any;
  destinations : any
  selectedLocation: any;

  constructor(private httpClient: HttpClient, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(queryParams => {
      this.destination = queryParams.destination;
      this.loadDestinations();
    }); 
  }

  loadDestinations(){
    this.httpClient.get("./assets/json/places.json").subscribe(data =>{
      this.destinations = data;
      this.selectedLocation = this.destinations.filter(e => e.name.toLowerCase() == this.destination.toLowerCase())[0];
      
      // this.selectedService = this.services.find(o => o.name.toLowerCase() === this.serviceName.toLowerCase());
      // this.video  = 'NWD-TTSJqek'
      window.scrollTo(100, 400)
      // if(this.type == 'domestic')
      //   this.filteredVideo = this.video['Domestic'];
      // else if (this.type == 'international')
      //   this.filteredVideo = this.video['International'];
      // else
      //   this.filteredVideo = this.video['International'].concat( this.video['Domestic']);
    })
  }

}
