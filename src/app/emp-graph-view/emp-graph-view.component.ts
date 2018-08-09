import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'emp-graph-view',
  templateUrl: './emp-graph-view.component.html',
  styleUrls: ['./emp-graph-view.component.css']
})
export class EmpGraphViewComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  constructor(private loginservice:LoginService){}
  public barChartLabels:string[] = this.loginservice.graphDates;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: this.loginservice.graphExpense, label: 'Expense'},
    {data: this.loginservice.graphCollection, label: 'Collected'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnDestroy(){
    this.loginservice.graphCollection=[];
    this.loginservice.graphDates=[];
    this.loginservice.graphExpense=[];
  }

}