import {NgModule} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import{LayoutComponent}  from './layout/layout.component';

//import{UsersComponent} from './users/users.component';

const routes:Routes = [
     {
         path:'', component:LayoutComponent, children:[
             {
                path:'',
                loadChildren: './home/home.module#HomeModule'
             },
             {
                path:'users',
                loadChildren: './users/users.module#UsersModule'
             },
             {
                path:'product',
                loadChildren: './product/product.module#ProductModule'
             }
             
        
        ] 
     }
    // {
    //     path:'', component:UsersComponent
    // }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
