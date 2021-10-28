import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [''],
    })
  }

  submit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    if (this.loginForm.controls.username.value !== 'lakshma' ||
      this.loginForm.controls.password.value !== '12345') {
      this.openSnackBar();
      return;
    }
    localStorage.setItem('user', atob(this.loginForm.controls.username.value));
    this.router.navigate(['/home']);
  }

  openSnackBar() {
    this._snackBar.open('Invalid Details!!', 'Dismiss', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
