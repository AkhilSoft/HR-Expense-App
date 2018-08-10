import { Http } from '@angular/http';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private loginService:LoginService,private http:Http,private router:Router) { }
  form= new FormGroup ({
    sdate: new FormControl("",[Validators.required]),
    edate:new FormControl("",[Validators.required]),
    
  });


  ngOnInit() {
  }
  getDate(){
    let s=Date.parse("" + this.form.value.sdate as string)
    let e=Date.parse("" + this.form.value.edate as string)
    this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/graph/graph1?startDate="+s+"&endDate="+e).subscribe(response => {
    console.log(response.json());

    console.log("-------------");
    for(let i=0;i<response.json().length;i++){
     // if(response.json()[i].empId==this.loginService.empId)
      {
        this.loginService.graphCollection.push(response.json()[i].expenseCollect);
        this.loginService.graphExpense.push(response.json()[i].expenseSpent);
        this.loginService.graphExpenseDiffer.push( response.json()[i].expenseSpent - response.json()[i].expenseCollect );
        this.loginService.graphEmpId.push( 'EmpId:'+ response.json()[i].empId );
      }

    }
    if( this.loginService.graphCollection.length > 1 ){
              this.loginService.graphCollection.push(1000);
              this.loginService.graphExpense.push(1000);
    }
    this.loginService.empId='';

    console.log("-------------");
    console.log(this.loginService.graphEmpId);
    console.log(this.loginService.graphCollection);
    console.log(this.loginService.graphExpense);
    
    this.router.navigateByUrl('/graph-view');
  //  date empId collection expense


     
    });


  }



}
