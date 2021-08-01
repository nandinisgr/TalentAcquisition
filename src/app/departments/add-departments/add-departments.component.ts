import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.scss']
})
export class AddDepartmentsComponent implements OnInit {
  minDate = new Date
  departmentForm: FormGroup;
  Success = false;
  save_update = true;
  updatedata: any;
  visable = true;
  error: boolean = true;
  IsmodelShow: boolean;
  d: any;
  userData: any;
  rolestype = ['Software Engineer', 'Designer', 'Developer', 'Programmer'];
  departmentname = ['Broadband Services', 'Desktop Support', 'Planning', 'Finance', 'Client Services'];
  department_id: any;

  constructor(public formBuilder: FormBuilder, private api: ApiService, public dialogRef: MatDialogRef<AddDepartmentsComponent>,
    private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.departmentForm = this.formBuilder.group({
      'department_name': ['', Validators.compose([Validators.required])],
      'roles': ['', Validators.compose([Validators.required])],
    });
    if (this.api.editDepartment != null) {
      this.d = this.api.editDepartment;
      this.departmentForm.patchValue(this.d);
    }
    this.reloadComponent()
  }
  Close() {
    this.IsmodelShow = true;
  }
  get f() {
    return this.departmentForm.controls;
  }
  clear() {
    this.departmentForm.reset()
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
  
  onDepartmentFormSubmit(value: any) {
    if (this.departmentForm.valid) {

      if (this.d == null) {
        this.api.DepartmentRegister(value).subscribe((d: any) => {
          console.log("===================>value ======>", d);
          this.router.navigateByUrl('/departmentlist');
          this.snackBar.open('Department Added Successfully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
        });
        this.dialogRef.close();
      }
      else {
        let d = Object.assign(this.departmentForm.value, { department_id: this.d.department_id });
        this.api.updateDepartment(d).subscribe((d: any) => {
          this.router.navigateByUrl('/departmentlist');
          this.snackBar.open('Department Details Updated SuccessFully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
          this.departmentForm.reset();

        });
        this.dialogRef.close();
      }
    }
    else {
      this.snackBar.open('Please fill in the missing details', '×', { panelClass: ["custom"], verticalPosition: 'top', duration: 3000 });

    }
  }
}

