import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule, MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatRadioModule } from '@angular/material/radio';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Http, HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { CacheInterceptor } from 'src/_helpers/cache-interceptor.service';
import { AddDepartmentsComponent } from './departments/add-departments/add-departments.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { AddMenuuserComponent } from './Menu-User/add-menuuser/add-menuuser.component';
import { ListMenuuserComponent } from './Menu-User/list-menuuser/list-menuuser.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent, 
    AddDepartmentsComponent,
    DepartmentsListComponent,
    AddMenuuserComponent,
    ListMenuuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    HttpModule,
    ChartsModule,

  ],

  providers: [{ provide: MatDialogRef, useValue: {} },AddDepartmentsComponent,AddMenuuserComponent,
  { provide: MAT_DIALOG_DATA, useValue: [] },
  { provide : LocationStrategy , useClass: HashLocationStrategy},
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    HttpClient, HttpClientModule, MatSnackBar, MatDialogConfig, DatePipe, HttpModule, MatDialog ],
  bootstrap: [AppComponent],
  entryComponents: [AddDepartmentsComponent,DepartmentsListComponent,AddMenuuserComponent,ListMenuuserComponent]
})
export class AppModule { }
