import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server/api.service';
import { AddMenuuserComponent } from '../add-menuuser/add-menuuser.component';

@Component({
  selector: 'app-list-menuuser',
  templateUrl: './list-menuuser.component.html',
  styleUrls: ['./list-menuuser.component.scss']
})
export class ListMenuuserComponent implements OnInit {
  displayedColumns: string[] = ['User Number', 'Department Name', 'User Name','Email ID','Address', 'Actions'];
  length = "100";
  pageSize = "10";
  pageSizeOptions = "[5, 10, 25, 100]";
  details: any;
  dataset: any;
  dataSource = new MatTableDataSource<any>();

  config: any = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public rowsOnPage = 5;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  d1: Object;

  constructor(private api: ApiService,
    public dialog: MatDialog, public snackBar: MatSnackBar,public dialogRef: MatDialogRef<ListMenuuserComponent>,
    public router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.getallUser();

  }
  getallUser() {
    this.api.getallUser().subscribe((r: any) => {
      this.details = r.details;
      this.dataSource = new MatTableDataSource<any>(this.details);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    });
  }
  onClick(): void {
    this.dialogRef.close();
  }
  public data: any = {};
  delete(data: any) {
    if (confirm("Are you sure ?")) {
    }
    else {
      return false;
    }
    this.api.removeUser(data).subscribe((data: any) => {
      let d: any = data;
      if (d.success) {
        this.snackBar.open('User Removed SuccessFully', '×', { panelClass: ["custom-style"], verticalPosition: 'top', duration: 3000 });
      }
      this.getallUser();
    })
  }
  edit(data) {
    let d: any = data;
    this.api.editUserDetails(d);
    this.config = [];
    this.config = [];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "800px";
    this.dialog.open(AddMenuuserComponent, dialogConfig)
  }

  userpage() {
    this.config = [];
    this.config = [];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "800px";
    this.dialog.open(AddMenuuserComponent, dialogConfig)
  }

}


