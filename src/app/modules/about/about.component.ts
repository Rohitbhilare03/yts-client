import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { CourseService } from 'src/app/service/course.service';
// import { OtherService } from 'src/app/service/other.service';
import { loadScript } from 'src/app/utils/loadscript';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  about: any;
  testimonials: any;
  features: any;
  counter: any;

  constructor() { }

  ngOnInit() {
    // this.getsAboutUs();
  }

  // async getsAboutUs() {
  //   this.about = await (this._svc.getAboutUs().toPromise());
  //   this.about = this.about[0];
  //   this.counter = await (this._svc.getCounter().toPromise());
  //   this.features = await (this._svc.getFeatureList().toPromise());
  //   this.testimonials = await (this._svc.getTestimonials().toPromise());
  //   console.log(this.features);

  // }



  ngAfterViewInit() {
    loadScript('./assets/js/plugins/custom.js');
  }

}
