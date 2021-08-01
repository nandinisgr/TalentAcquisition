import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../server/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  Submit = false;
  visable = true;
  userTypeList = [{ id: 'user', name: 'user' }, { id: 'manager', name: 'manager' }, { id: 'hr', name: 'hr' }];

  // userType = 'any';
  sign = 'true';
  userData: any;
  details: any;
  user: any;
  manager: any;
  hr: any;
  Role: any;
  DIRECTOR: any;
  userType: string;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private api: ApiService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      'email_id': ['', ([Validators.required, Validators.required])],
      'password': ['', Validators.compose([Validators.required])],

    });
  }
  resetpassword() {
    this.router.navigateByUrl('/resetpassword');
  }
  loginsubmit(value: object): void {
    let d: any = value
    if (this.LoginForm.valid) {
      this.api.userLogin(value).subscribe(data => {
        let details: any = data;
        localStorage.setItem("details", JSON.stringify(details));

        if (details.details) {
          this.userData = true;
          window.localStorage.setItem('token', details.Token)
          console.log(">>>>>>>>>>>>jwt", details.Token)
          window.localStorage.setItem('userData', JSON.stringify(details.details))
          this.api.setdata();
          this.snackBar.open('Login Sucessfully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
          this.router.navigateByUrl('/home');

        }
        else {
          this.snackBar.open('Login failed', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });

        }
      });
    }
    else {
      this.snackBar.open('Please fill all details!', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });

    }
  }
  forgotpwd() {
    this.router.navigateByUrl('/forgotpassword');
  }
}

