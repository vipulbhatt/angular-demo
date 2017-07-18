import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import{UsersRoutes} from './users.routing';

import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes
  ], 
  declarations: [UsersComponent]
})
export class UsersModule { }
