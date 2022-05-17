import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetAllNotesComponent } from './Component/get-all-notes/get-all-notes.component';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import { TrashComponent } from './Component/trash/trash.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetPassword',component: ForgetPasswordComponent},
  {path:'resetpassword/:token', component: ResetPasswordComponent},
  {path:'dashboard', component:DashboardComponent,
  children:[
    {path:'notes', component:GetAllNotesComponent},
    {path:'archive', component:ArchieveComponent},
    {path:'Trash', component:TrashComponent}
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
