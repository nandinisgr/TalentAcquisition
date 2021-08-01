import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../server/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  Submit = false;
  visable = true;
  userTypeList = [{ id: 'user', name: 'user' }, { id: 'manager', name: 'manager' }, { id: 'hr', name: 'hr' }];

  userType = 'any';
  sign = 'true';
  data: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      'user_name': ['', Validators.compose([Validators.required])],
      'email_id': ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  get f() {
    return this.RegisterForm.controls;
  }

  registersubmit(value: any): void {
    this.api.getByEmail({ email_id: value.email_id }).subscribe((r: any) => {
      if (r.details.length > 0) {
        this.snackBar.open('Email ID is Already Exist', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });
      }
      this.api.getByName({ user_name: value.user_name }).subscribe((r: any) => {
        if (r.details.length > 0) {
          this.snackBar.open('User name is Already Exist', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });
        }
        else {
          if (this.RegisterForm.valid) {
            this.api.userRegister(value).subscribe((data: any) => {
              let d: any = data;
              if (d.success) {
                this.snackBar.open(d.message, '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
                this.RegisterForm.reset();
              } else {
                this.snackBar.open('User Registered Successfully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
              }
              this.router.navigateByUrl('/login');
            });

          }

          else {
            this.snackBar.open('Please fill all details!', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });

          }
        }
      });
    });
  }
}
