import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  place: any;
  destinations: any;
  destination: any;
  selectedLocation: any;
  selectedPlace: any;

  constructor(private httpClient: HttpClient, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(queryParams => {
      this.place = queryParams.place;
      this.destination = queryParams.destination;
      this.loadDestinations();
    }); 
  }

  loadDestinations(){
    this.httpClient.get("./assets/json/places.json").subscribe(data =>{
      this.destinations = data;
      this.selectedLocation = this.destinations.filter(e => e.name.toLowerCase() == this.destination.toLowerCase())[0];
      this.selectedPlace = this.selectedLocation.places.filter(e => e.name.toLowerCase() == this.place.toLowerCase())[0];
      window.scrollTo(100, 400)
    })
  }

}
