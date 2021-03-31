import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from '../constants/MENU';
import { loadScript } from 'src/app/utils/loadscript';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  __MENU: any[];
  constructor(
    public router: Router
  ) {
    this.__MENU = MENU;
  }
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    loadScript('./assets/js/plugins/custom.js');
  }
}
