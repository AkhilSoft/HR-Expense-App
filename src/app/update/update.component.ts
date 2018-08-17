import { LoginService } from "./../login.service";
import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "../CustomValidation";
import { Router } from "@angular/router";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  url: string = "http://192.168.2.81:8080/OfficeExpenseManager/update/update1";
  deleteUrl: string =
    "http://192.168.2.81:8080/OfficeExpenseManager/delete/delete1" +
    "?empId=" +
    this.loginService.empId +
    "";
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

  constructor(
    private http: Http,
    private loginService: LoginService,
    private router: Router
  ) {}
  emp = {
    birthday: "",
    designation: "Developer",
    emailId: "bhim@gmail.com",
    empId: 1,
    gender: "male",
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
        console.log(response);
      });
  }

  updateEmp() {
    let updateEmp = {
      _id: this.emp._id,
      empId: this.emp.empId,
      name: this.emp.name,
      designation: this.emp.designation,
      status: "activate",

      mobileNo: this.emp.mobileNo,
      emailId: this.emp.emailId,
      joiningDay: Date.parse(("" +
        (this.form.value.joiningDay
          ? this.form.value.joiningDay
          : this.emp.joiningDay)) as string).toString(),

      birthday: Date.parse(("" +
        (this.form.value.birthday
          ? this.form.value.birthday
          : this.emp.birthday)) as string).toString(),

      salary: this.emp.salary,
      gender: this.emp.gender,
      password: this.emp.password
    };
    console.log(JSON.stringify(this.emp));
    console.log(JSON.stringify(updateEmp));
    console.log(this.emp);
    this.http
      .post(
        "http://192.168.2.81:8080/OfficeExpenseManager/update/update1",
        updateEmp
      )
      .subscribe(response => {
        console.log(response);
        alert(response.json().statusMessage);
        if (response.json().statusMessage == "Update Success")
          this.router.navigateByUrl("/profile");
      });
  }
}
