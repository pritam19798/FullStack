import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{

  constructor(public message:string){}

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(name){

    // let basicAuthHeaderString=this.creatBasicAuthenticationHttpHeader()
    // let headers =new HttpHeaders({Authorization:basicAuthHeaderString})

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/user/${name}`
    // ,{headers:headers}
    )
    //console.log("execute")

  }

  // creatBasicAuthenticationHttpHeader(){
  //   let user="user"
  //   let password="password"
  //   let basicAuthHeaderString='Basic '+window.btoa(user+':'+password)
  //   return basicAuthHeaderString
  // }

}
