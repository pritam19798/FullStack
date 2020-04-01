import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { API_URL, AUNTHENTICATED_USER, TOKEN } from '../app.constants';



@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }


  executeAuthenticationService(username,password){

    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password)

    let headers =new HttpHeaders({Authorization:basicAuthHeaderString})

    return this.http.get<AuthenticationldBean>(`${API_URL}/basicauth`,{headers:headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUNTHENTICATED_USER,username)
          sessionStorage.setItem(TOKEN,basicAuthHeaderString)
          return data
        }
      )
    )
    //console.log("execute")

  }

  getAuthenticateUser(){
    return sessionStorage.getItem(AUNTHENTICATED_USER)
    
  }

  getAuthenticateToken(){
    if(this.getAuthenticateUser())
      return sessionStorage.getItem(TOKEN)
    
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem(AUNTHENTICATED_USER)
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem(AUNTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }


}

export class AuthenticationldBean{
  constructor(private message:string){}
}
