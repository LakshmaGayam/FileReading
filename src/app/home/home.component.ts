import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routerLink = "/filesSearch"
  tabIndex;
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(event) {
    console.log(event ,  'tabindex')
    this.tabIndex = event.index;
  }

}
