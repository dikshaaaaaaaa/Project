import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { CandeactivateGuard } from './candeactivate.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  // {path:"users",component:UsersComponent, canActivate:[AuthGuard]}
  {path:"users",component:UsersComponent,canDeactivate:[CandeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
