import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import{homeRoutes} from './home.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    homeRoutes,
    NgbModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
