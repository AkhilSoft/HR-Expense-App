import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  empId=this.loginService.empId;
  ngOnInit() {
    console.log(this.loginService.empId);
  }
  ngOnDestroy(){
    this.loginService.graphCollection=null;
    this.loginService.graphDates=null;
    this.loginService.graphExpense=null;
    this.loginService.graphExpenseDiffer=null;
    this.loginService.graphCollection=[];
    this.loginService.graphDates=[];
    this.loginService.graphExpense=[];
    this.loginService.graphExpenseDiffer=[];
    this.loginService.empId='';
  }

}
