import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail:string;
  pass:number;
  login:boolean=true;
  message:string;
  
    
  constructor(private router:Router) { }

  onContact()
{ 
  if ((this.mail==='khalilbensaid12@gmail.com') && (this.pass=123456)){
    this.router.navigate(['/accueil']); 
    
    this.message='WELCOME';
    }
    else{
      
      this.message='ERROR 404';

    }
  
}



  ngOnInit() {
  }

}
