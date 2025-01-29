import { Routes } from '@angular/router';
import { LoginComponent } from '../page/login/login/login.component';
import { RegistrationComponent } from '../page/registration/registration/registration.component';
import { LayoutComponent } from '../page/component/layout/layout.component';
import { DashboardComponent } from '../page/component/dashboard/dashboard.component';
import { HomeComponent } from '../page/component/home/home.component';
import { authguardGuard } from '../guard/authguard.guard';

export const routes: Routes = [{
    path:'home',
    component:HomeComponent
},
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
       
        
    },{
        path:'login',
        component:LoginComponent
    },{
        path:'registration',
        component:RegistrationComponent
    },{
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate:[authguardGuard]
            }
        ]
    }
];
