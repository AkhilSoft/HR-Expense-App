import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { CustomValidation } from "../CustomValidation";

@Component({
  selector: "register-emp",
  templateUrl: "./register-emp.component.html",
  styleUrls: ["./register-emp.component.css"]
})
export class RegisterEmpComponent implements OnInit {
  url:string= "http://192.168.2.81:8080/OfficeExpenseManager/registration/registration1";
  form;
 formInit(){
  this.form = new FormGroup({
    name: new FormControl("" ,Validators.required),
    
    designation: new FormControl("",Validators.required),
    salary:  new FormControl("" ,Validators.required),
    mobileNo: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    gender: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,CustomValidation.mustContainOneSpecialCharacter]),
    cpassword: new FormControl("",Validators.required)
  });

 }
  constructor(private http: Http) {
    // http.get(this.url)
    //   .subscribe(response => {
    //   this.emp=response.json();
    //   console.log(response.json);
    //   });
  
  }

  print(p){
    console.log(p);
    
  }



  ngOnInit() {
    this.formInit();
  }
  get password(){
    return this.form.get('password');
  }
  createEmp() {
    let emp = {
      name: this.form.value.name,
      designation: this.form.value.designation,
      mobileNo: this.form.value.mobileNo,
      emailId: this.form.value.email,
      status:'activate',
      salary:this.form.value.salary,
      gender: this.form.value.gender,
      password: this.form.value.password
    };
    console.log(JSON.stringify(emp));

    this.http.post(this.url, emp).subscribe(response => {
      console.log(response.json());

      console.log(response);

      alert(response.json().statusMessage);
      // this.form.password.value='';
      // this.form.gender.value='';
      // this.form.cpassword.value='';

      this.form.reset();
      this.form.markAsUntouched();
      
     // this.formInit();
    //  this.ngOnInit();
   
    });
  }
}
