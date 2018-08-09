import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css']
})
export class GraphViewComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  constructor(private loginservice:LoginService){}
  public barChartLabels:string[] = this.loginservice.graphEmpId;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: this.loginservice.graphExpense, label: 'Expense'},
    {data: this.loginservice.graphCollection, label: 'Collected'},
    {data: this.loginservice.graphExpenseDiffer, label: 'Difference'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnDestroy(){
    this.loginservice.graphCollection=null;
    this.loginservice.graphEmpId=null;
    this.loginservice.graphExpense=null;
    this.loginservice.graphExpenseDiffer=null;
    this.loginservice.graphCollection=[];
    this.loginservice.graphEmpId=[];
    this.loginservice.graphExpenseDiffer=[];
    this.loginservice.graphExpense=[];
    this.loginservice.empId='';
  }

}