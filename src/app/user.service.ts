import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface myData {
  email: string,
  status: boolean,
  rank : string
}

interface isLoggedIn {
  status : boolean
}

interface logoutStatus{
  success : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<myData>('/api/data')
  }


  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/api/isLoggedin')
  }

  logout(){
    return this.http.get<logoutStatus>('/api/logout')
  }

}
