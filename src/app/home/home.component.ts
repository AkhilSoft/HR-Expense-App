import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: Http) {}
  Birthdays;
  Anniversary;
  ngOnInit() {
    this.getBirthdayRemainders();
    this.getAnniversaryRemainders();
  }

  getBirthdayRemainders() {
    this.http
      .get("http://192.168.2.81:8080/OfficeExpenseManager/birthday/birthday1")
      .subscribe(response => {
        console.log(response);
        this.Birthdays = response.json();
      });
  }
  getAnniversaryRemainders() {
    this.http
      .get(
        "http://192.168.2.81:8080/OfficeExpenseManager/employeeAnniversary/employeeAnniversary1"
      )
      .subscribe(response => {
        console.log(response);
        this.Anniversary = response.json();
      });
  }
}
