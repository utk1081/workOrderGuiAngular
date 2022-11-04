import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Timesheet } from './model/timesheet';
import { OverviewComponent } from './overview/overview.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: '/', component: LoginComponent, canActivate:[AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
