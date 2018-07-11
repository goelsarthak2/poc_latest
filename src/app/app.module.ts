import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { UsersComponent } from './shared/users/users.component';
import { CallComponent } from './shared/call/call.component';
import { LoginComponent } from './shared/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    UsersComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
