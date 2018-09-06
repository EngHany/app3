import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { RouterModule } from "@angular/router";
import { routesC } from './app-routing.module';
//import { routingModule } from "./app-routing.module";
import { StreamService } from './stream.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesC)
  ],
  providers: [StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
