import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../server/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  details: any;
  r: any
  config: any[];
  constructor(private api: ApiService,
    public dialog: MatDialog, public snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit(): void {
    let details = this.api.getCurrent();
    this.details = details.details;

  }
  logout() {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.clear();
    localStorage.clear();

    this.router.navigateByUrl('/login');

  }
}