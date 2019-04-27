import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './approuting.module';

import { CustomersModule } from './customers/customers.module';
import { DataService } from './core/service/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
