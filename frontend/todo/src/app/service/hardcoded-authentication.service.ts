import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authentication(username,password){
    if(username==='Pritam' && password==='1'){
      sessionStorage.setItem('authenticatedUser',username)
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }

}
