import { LoginService } from './../login.service';
import { Http } from '@angular/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http:Http,private loginservice:LoginService,private router:Router) { }
  list=[];
  ngOnInit() {
      this.getList();
  }

  getList(){
    
    this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/login/list").subscribe(response => {
      console.log(response.json());
      this.list=response.json();
      console.log(this.list);
    });
  }

  editEmp(emp ){
    this.loginservice.empId=emp;
    this.router.navigateByUrl('/profile');
  }
  empStatusChange(emp,status:string){
    this.loginservice.empId=emp;
    emp.status=status;
    this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/update/update1",emp).subscribe(response => {
      console.log(response.json());
      alert('Employee '+status);
    });
  }
  deleteEmp(empId){
    this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/delete/delete1"+"?empId="+empId+"").subscribe(response => {
      console.log(response.json());
    });
  }

}
