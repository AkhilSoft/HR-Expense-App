import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from '../CustomValidation';
import { LoginService } from '../login.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  url:string="http://192.168.2.81:8080/OfficeExpenseManager/update/update1";
  form = new FormGroup({
    name: new FormControl("" ,Validators.required),
    _id:new FormControl(""),
    empId:new FormControl(""),
    designation: new FormControl("" ,Validators.required),
    salary:  new FormControl("" ,Validators.required),
    mobileNo: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email,CustomValidation.cannotContainSpace,CustomValidation.mustContainDotforEmail]),
    gender: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,CustomValidation.mustContainOneSpecialCharacter]),
    cpassword: new FormControl("",Validators.required)
  });

  constructor(private http:Http,private loginService:LoginService) {
    
  }
   emp = {
    _id:'aaaaa',
    empId:'aaaaaaaa',
    name:"aaaaaaa" ,
    designation:"Dev",
    mobileNo: '99999999999',
    emailId: 'aaaa@gmail.com',
    salary:'100000',
    gender: 'Male',
    password: '123456@'

  };

  ngOnInit() {
    this.getEmp();
  }

  getEmp(){

    this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/profile/profile1?empId="+this.loginService.empId+"").subscribe(response => {
      console.log(response.json());
    
      this.emp._id=response.json()._id;
      this.emp.empId=response.json().empId;
      this.emp.name= response.json().name;
      this.emp.designation=response.json().designation;
      this.emp.mobileNo=response.json().mobileNo;
      this.emp.emailId= response.json().emailId;
      this.emp.salary=response.json().salary;
      this.emp.gender= response.json().gender;
      this.emp.password=response.json().password;



      console.log(response);

     
     
    });


  }

  updateEmp() {
    let updateEmp = {
      _id:true?this.form.value._id:this.emp._id,
      empId:this.form.value.empId,
      name: this.form.value.name,
      designation: this.form.value.designation,
      mobileNo: this.form.value.mobileNo,
      emailId: this.form.value.email,
      salary:this.form.value.salary,
      gender: this.form.value.gender,
      password: this.form.value.password
    };
    console
    console.log(JSON.stringify(updateEmp));

console.log(this.emp);
    this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/update/update2", this.emp).subscribe(response => {
    
      console.log(response);
      alert(response.json().statusMessage);

     
    });

  }
  
}
