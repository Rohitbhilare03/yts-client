import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceName: any;
  services: any;
  selectedService: any;
  video: string;

  constructor(private httpClient: HttpClient, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(queryParams => {
      this.serviceName = queryParams.serviceName;
      this.loadService();
    }); 
  }

  loadService(){
    this.httpClient.get("./assets/json/services.json").subscribe(data =>{
      this.services = data;
      this.selectedService = this.services.find(o => o.name.toLowerCase() === this.serviceName.toLowerCase());
      this.video  = 'NWD-TTSJqek'
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
