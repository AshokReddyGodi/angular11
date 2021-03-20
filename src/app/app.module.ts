import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveRegisterComponent,
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
