import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { RegisterEmpComponent } from './register-emp/register-emp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { HttpClientModule } from '@angular/common/http';
import { InvalidComponent } from './invalid/invalid.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ExpenseComponent } from './expense/expense.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { EmpGraphViewComponent } from './emp-graph-view/emp-graph-view.component';
import { EmpGraphComponent } from './emp-graph/emp-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEmpComponent,
    HomeComponent,
    GraphComponent,
    InvalidComponent,
    UpdateComponent,
    LoginComponent,
    ExpenseComponent,
    GraphViewComponent,
    ProfileComponent,
    ListComponent,
    EmpGraphViewComponent,
    EmpGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
          {
            path:"",
            component:HomeComponent
          },
          {
            path:"graph",
            component:GraphComponent
          },
          {
            path:"graph-view",
            component:GraphViewComponent
          },
          {
            path:"emp-graph",
            component:EmpGraphComponent
          },
        
          {
            path:"emp-graph-view",
            component:EmpGraphViewComponent
          },
          {
            path:"register",
            component:RegisterEmpComponent
          },
          {
            path:"profile",
            component:ProfileComponent
          },
          {
            path:"list",
            component: ListComponent
          }, 
          {
            path:"update",
            component:UpdateComponent
          }, 
          {
            path:"login",
            component:LoginComponent
          },   
          {
            path:"expense",
            component:ExpenseComponent
          },  
          {
            path:"**",
            component:InvalidComponent
          },

    ]),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
