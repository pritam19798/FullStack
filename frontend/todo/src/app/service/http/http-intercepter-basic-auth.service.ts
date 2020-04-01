import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let user="Pritam"
    // let password="1"
    // let basicAuthHeaderString='Basic '+window.btoa(user+':'+password)

    let basicAuthHeaderString=this.basicAuthenticationService.getAuthenticateToken();
    let username=this.basicAuthenticationService.getAuthenticateUser();

    if(basicAuthHeaderString && username){
      request=request.clone(
        {
          setHeaders:{
            Authorization:basicAuthHeaderString
          }
        }
      )
    }
    return next.handle(request)
  }



}
