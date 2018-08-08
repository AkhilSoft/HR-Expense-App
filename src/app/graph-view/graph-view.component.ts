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