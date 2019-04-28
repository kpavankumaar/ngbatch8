import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './approuting.module';

import { CustomersModule } from './customers/customers.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './core/service/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
