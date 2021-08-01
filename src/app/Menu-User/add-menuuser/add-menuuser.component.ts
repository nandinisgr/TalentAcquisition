import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-add-menuuser',
  templateUrl: './add-menuuser.component.html',
  styleUrls: ['./add-menuuser.component.scss']
})
export class AddMenuuserComponent implements OnInit {
  minDate = new Date
  userForm: FormGroup;
  Success = false;
  save_update = true;
  updatedata: any;
  visable = true;
  error: boolean = true;
  IsmodelShow: boolean;
  d: any;
  userData: any;

  departmentname = ['Broadband Services', 'Desktop Support', 'Planning', 'Finance', 'Client Services'];
  menuuser_id: any;
  constructor(public formBuilder: FormBuilder, private api: ApiService,public dialogRef: MatDialogRef<AddMenuuserComponent>,
    private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'department_name': ['', Validators.compose([Validators.required])],
      'address': ['', Validators.compose([Validators.required])],
      'user_name': ['', Validators.compose([Validators.required])],
      'email_id': ['', Validators.compose([Validators.required])],
    });
    if (this.api.editUser != null) {
      this.d = this.api.editUser;
      this.userForm.patchValue(this.d);
    }
    this.reloadComponent()
  }
  Close() {
    this.IsmodelShow = true;
  }
  get f() {
    return this.userForm.controls;
  }
  clear() {
    this.userForm.reset()
  }
  onClick(): void {
    this.dialogRef.close();
  }
  reloadComponent() { //for refresh page
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  
  onUserFormSubmit(value: any) {
    if (this.userForm.valid) {
      if (this.d == null) {
        this.api.MenuUserRegister(value).subscribe((d: any) => {
          if (d.success) {
            this.router.navigateByUrl('/Userlist');
            this.snackBar.open('User Added Successfully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
            this.Success = true;
            this.visable = false;

          } else {
            this.router.navigateByUrl('/Userlist');
            this.snackBar.open('User Added Successfully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
          }
        });
        this.dialogRef.close();
      }
      else {
        let d = Object.assign(this.userForm.value, { menuuser_id: this.d.menuuser_id });
        this.api.updateUser(d).subscribe((d: any) => {
          this.router.navigateByUrl('/Userlist');
          this.snackBar.open('User Details Updated SuccessFully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
          this.userForm.reset();

        });
        this.dialogRef.close();
      }
    }
    else {
      this.snackBar.open('Please fill in the missing details', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });

    }
  }
}

