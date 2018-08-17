import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "../CustomValidation";
import { LoginService } from "../login.service";
import { Http } from "@angular/http";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  url: string = "http://localhost:8080/OfficeExpenseManager/update/update1";
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    _id: new FormControl(""),
    empId: new FormControl(""),
    designation: new FormControl("", Validators.required),
    salary: new FormControl("", Validators.required),
    mobileNo: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    birthday: new FormControl("", Validators.required),
    joiningDay: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    password: new FormControl("", [
      Validators.required,
      CustomValidation.mustContainOneSpecialCharacter
    ]),
    cpassword: new FormControl("", Validators.required)
  });

  constructor(private http: Http, private loginService: LoginService) {}
  emp = {
    birthday: "",
    designation: "Dev",
    emailId: "bhim@gmail.com",
    empId: 1,
    gender: "Male",
    joiningDay: "",
    mobileNo: "9478256841",
    name: "bhimsen",
    password: "123456@",
    salary: 50000,
    status: "activate",
    _id: "5b753dd7219ad49159a38761"
  };

  ngOnInit() {
    this.getEmp();
  }

  getEmp() {
    this.http
      .get(
        "http://192.168.2.81:8080/OfficeExpenseManager/profile/profile1?empId=" +
          this.loginService.empId +
          ""
      )
      .subscribe(response => {
        console.log(response.json());

        this.emp._id = response.json()._id;
        this.emp.empId = response.json().empId;
        this.emp.name = response.json().name;
        this.emp.designation = response.json().designation;
        this.emp.mobileNo = response.json().mobileNo;
        this.emp.emailId = response.json().emailId;
        this.emp.salary = response.json().salary;
        this.emp.gender = response.json().gender;
        this.emp.password = response.json().password;
        this.emp.birthday = new Date(response.json().birthday)
          .toLocaleDateString()
          .split("/")
          .reverse()
          .join("-");

        this.emp.joiningDay = new Date(response.json().joiningDay)
          .toLocaleDateString()
          .split("/")
          .reverse()
          .join("-");
        //  let date = new Date(response.json()[i].date);
        //  this.loginService.graphDates.unshift( date.toLocaleDateString() );

        console.log(response);
      });
  }

  updateEmp() {
    let updateEmp = {
      _id: true ? this.form.value._id : this.emp._id,
      empId: this.form.value.empId,
      name: this.form.value.name,
      designation: this.form.value.designation,
      status: "activate",
      mobileNo: this.form.value.mobileNo,
      emailId: this.form.value.email,
      salary: this.form.value.salary,
      gender: this.form.value.gender,
      password: this.form.value.password
    };
    console;
    console.log(JSON.stringify(updateEmp));

    console.log(this.emp);
    this.http
      .post(
        "http://localhost:8080/Proj_OfficeExpenseManager/update/update2",
        this.emp
      )
      .subscribe(response => {
        console.log(response);
        alert(response.json().statusMessage);
      });
  }
}
