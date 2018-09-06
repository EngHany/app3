import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

export const routesC:Routes=[
  {path:'first/:id',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent} , 
  {path:'',component:ThirdComponent} ,
  {path:'**',component:SecondComponent} 
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routesC);
