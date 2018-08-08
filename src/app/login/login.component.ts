import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from '../CustomValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form= new FormGroup ({
    email: new FormControl("",[Validators.required]),
   password:new FormControl("",[Validators.required]),
    
  });
  statusMessage:string='';

  constructor(private http:Http,private loginService:LoginService,private router:Router) { 

   }

  ngOnInit() {
  }

  login(email){
    let emp={
    "emailId":this.form.value.email,
      "password":this.form.value.password
      }
      
  
        if(emp.emailId=='admin'&&emp.password=='abc')
        {
          
          this.loginService.isLogin=true;
  
        
          console.log("login success");
          this.router.navigateByUrl('/');
        }
        else  
        {
          this.statusMessage="Invalid Password/Email";
          this.loginService.isLogin=false;
    
 
        }
    
      }
    
    
  }


