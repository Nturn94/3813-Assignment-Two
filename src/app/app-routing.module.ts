import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashComponent } from './dash/dash.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'home', component: HomeComponent, pathMatch: "full"},
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: 'home' },
  
  // canActivate: [AuthGuard]
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
