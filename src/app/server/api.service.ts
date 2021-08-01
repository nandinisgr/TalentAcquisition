import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

import { pipe } from 'rxjs';
const Token_KEY = 'access_token'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    public messageSource = new BehaviorSubject("");
    currentMessage = this.messageSource.asObservable();

    private searchData = new BehaviorSubject<Object[]>([]);
    SearchAllData = this.searchData.asObservable();

    changeMessage(SearchAllData: object[]) {
    }
    getCurrent() {
        // let data = window.sessionStorage.getItem('details');
        let data = localStorage.getItem("details");
        // console.log('data get current in api-----', data)
        return JSON.parse(data);
    }
    userRegister(user) {
        return this.http.post(environment.postgresURL + '/userRegister', user);
    }
    userLogin(data) {
        return this.http.post(environment.postgresURL + '/userLogin', data);
    }
    getByEmail(data: any) {
        return this.http.post(environment.postgresURL + '/getByEmail', data);
    }
    getByName(data: any) {
        return this.http.post(environment.postgresURL + '/getByName', data);
    }
    setdata() {
        this.messageSource.next(window.sessionStorage.getItem('token'));
    }
    logout() {
        return this.http.get(environment.postgresURL + '/logout')
    }
    //update services----------------------------

    editDepartment: any;
    editDepartmentDetails(d) {
        this.editDepartment = d;
    }
    editUser: any;
    editUserDetails(d) {
        this.editUser = d;
    }
    //deparetment
    DepartmentRegister(data) {
        return this.http.post(environment.postgresURL + '/DepartmentRegister', data);
    }
    getallDepartment() {
        return this.http.get(environment.postgresURL + '/getallDepartment');
    }
    updateDepartment(data: any) {
        return this.http.post(environment.postgresURL + '/updateDepartment', data);
    }
    removeDepartment(data: any) {
        return this.http.post(environment.postgresURL + '/removeDepartment', data);
    }
    getDepartmentCount() {
        return this.http.get(environment.postgresURL + '/getDepartmentCount');
    }
     //user
     MenuUserRegister(data) {
        return this.http.post(environment.postgresURL + '/MenuUserRegister', data);
    }
    getallUser() {
        return this.http.get(environment.postgresURL + '/getallUser');
    }
    updateUser(data: any) {
        return this.http.post(environment.postgresURL + '/updateUser', data);
    }
    removeUser(data: any) {
        return this.http.post(environment.postgresURL + '/removeUser', data);
    }
    getUserCount() {
        return this.http.get(environment.postgresURL + '/getUserCount');
    }
}
