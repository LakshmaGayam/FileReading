import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routerLink = "/filesSearch";
  tabIndex = 0;
  constructor(private router:Router ,
    private activatedRoute:ActivatedRoute ,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login')

  }

  changeTab(event) {
    console.log(event ,  'tabindex')
    this.tabIndex = event.index;
  }


  logout() {
    localStorage.clear();
    this.titleService.setTitle('Login')
    this.router.navigate(['/'] ,{relativeTo: this.activatedRoute});
    // window.location.reload();

  }
}
