import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder ,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username:['lakshma'],
      password:['12345'],
    })
  }

  submit() {
    if(!this.loginForm.controls.username.value) {
      alert('Please Enter User Name');
      return;
    }
      localStorage.setItem('user' , atob(this.loginForm.controls.username.value))
      this.router.navigate(['/home'])
  }
}
