import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../server/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: any = [];
  details: any;
  r: any
  animal_type: any;
  data1: any;
  data: any;

  departmentCountLength: any;

  departmentCount: any;
  userCount: any;
  UserCountLength: any;
  constructor(private api: ApiService,
    public dialog: MatDialog, public snackBar: MatSnackBar,
    public router: Router) { }


  ngOnInit(): void {
    let details = this.api.getCurrent();
    this.details = details.details;
    this.api.getDepartmentCount().subscribe((department: any) => {
      this.departmentCount = department.departmentCount;
      this.departmentCountLength = this.departmentCount[0].department;

    })
    this.api.getUserCount().subscribe((menu_user: any) => {
      this.userCount = menu_user.userCount;
      this.UserCountLength = this.userCount[0].menu_user;
    })

  }
  logout() {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.clear();
    localStorage.clear();

    this.router.navigateByUrl('/login');

  }

}
