import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  form= new FormGroup ({
    expense:new FormControl(),
    empId:new FormControl(),
   date:new FormControl(),
   spentAmount:new FormControl(),
   collectAmount:new FormControl(),
   
  });

  constructor(private http:Http,private loginService:LoginService) { 

   }

  ngOnInit() {
  }

  submit(){

  let expense= {
   
    purposeName:this.form.value.expense,
   date:  Date.parse("" + this.form.value.date as string) ,
   expenseSpent:this.form.value.spentAmount,
   expenseCollect:this.form.value.collectAmount,
   empId:this.form.value.empId

  };

  console.log(JSON.stringify(expense));


     this.http.post("http://192.168.2.81:8080/OfficeExpenseManager/expense/expenseCollect",expense )
    .subscribe(
      response =>{
        console.log(response);
        alert(response.json().statusMessage);
        


      }

    ) 
  }


}
