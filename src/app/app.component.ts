import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSelected=1;
  // isLogin:boolean=this.loginService.isLogin;
  constructor(private loginService:LoginService,private router:Router){
    
  }
  ngOnInit(){
  if(this.loginService.isLogin==false ){
    this.router.navigateByUrl('/login');
    
  }

}

  logout()
  {
    this.loginService.isLogin=false ;
 

    this.router.navigateByUrl('/login');
   

  }
  
}
