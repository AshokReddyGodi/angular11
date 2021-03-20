import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';

const routes: Routes = [
  { path: '', component: ReactiveLoginComponent },
  { path: 'reactive-register', component: ReactiveRegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
