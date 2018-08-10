import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private loginService:LoginService,private http:Http,private router:Router) { }
  form= new FormGroup ({
    sdate: new FormControl("",[Validators.required]),
    edate:new FormControl("",[Validators.required]),
    
  });


  ngOnInit() {
  }
  getData(){
    let s=Date.parse("" + this.form.value.sdate as string)
    let e=Date.parse("" + this.form.value.edate as string)
    this.http.get("http://192.168.2.81:8080/OfficeExpenseManager/graph/graph2?startDate="+s+"&endDate="+e+"&empId="+this.loginService.empId).subscribe(response => {
    console.log(response.json());

    console.log("-----------"+this.loginService.empId);
    for(let i=0;i<response.json().length;i++){
     // if(response.json()[i].empId==this.loginService.empId)
      {
        this.loginService.graphCollection.push(response.json()[i].expenseCollect);
        this.loginService.graphExpense.push(response.json()[i].expenseSpent);
        this.loginService.graphExpenseDiffer.push( response.json()[i].expenseSpent - response.json()[i].expenseCollect );
        let date = new Date(response.json()[i].date);
        this.loginService.graphDates.unshift( date.toLocaleDateString() ) ;

      }

    }
    if( this.loginService.graphCollection.length > 1 ){
              this.loginService.graphCollection.push(1000);
              this.loginService.graphExpense.push(1000);
    }
    

    console.log("-------------");
    console.log(this.loginService.graphDates);
    console.log(this.loginService.graphCollection);
    console.log(this.loginService.graphExpense);
    
    this.router.navigateByUrl('/table-view');
  //  date empId collection expense


     
    });


  }



}
