import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { CourseService } from 'src/app/service/course.service';
// import { OtherService } from 'src/app/service/other.service';
// import { loadScript } from 'src/app/utils/loadscript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  about: any;
  counter: any;
  features: any;
  testimonials: any;
  courses: any;

  constructor() { }

  ngOnInit() {
    // this.getsAboutUs();
    // this.getCourses();
  }

  // async getsAboutUs() {
  //   this.about = await (this._svc.getAboutUs().toPromise());
  //   this.about = this.about[0];
  //   this.counter = await (this._svc.getCounter().toPromise());
  //   this.features = await (this._svc.getFeatureList().toPromise());
  //   this.testimonials = await (this._svc.getTestimonials().toPromise());
  //   console.log(this.features);

  // }

  // getCourses() {
  //   this.courseService.getAllCourses().subscribe(
  //     data => {
  //       this.courses = data.filter(eachCourse => eachCourse.isSpecial == true);
  //       console.log(this.courses);
  //     }
  //   )
  // }


  ngAfterViewInit() {
    // loadScript('assets/js/custom.js');
  }

}
