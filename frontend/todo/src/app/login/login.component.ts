import { Component, OnInit } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="Pritam Chowdhury"
  password=""
  message="invalid"
  invalid=false

  constructor(private router:Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  hanleLogin(){
    if(this.hardcodedAuthenticationService.authentication(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalid=false
    }else{
      this.invalid=true
    }
  }

  BasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalid=false

      },
      error=>{
        console.log(error)
        this.invalid=true;
      }
    )
      

  }

}
