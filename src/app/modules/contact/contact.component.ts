import { Component, OnInit } from '@angular/core';
import { loadScript } from 'src/app/utils/loadscript';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    loadScript('./assets/js/plugins/custom.js');
  }

}
