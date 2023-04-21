import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  baseURL: string = 'http://localhost:8082/v1/employee/'

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(employee);
    console.log(body);
    return this.http.post(this.baseURL + 'post', body, { 'headers': headers });
  }
}
