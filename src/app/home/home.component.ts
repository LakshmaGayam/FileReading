import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routerLink = "/filesSearch"
  tabIndex;
  constructor(private router:Router ,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeTab(event) {
    console.log(event ,  'tabindex')
    this.tabIndex = event.index;
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/'] ,{relativeTo: this.activatedRoute});
  }
}
