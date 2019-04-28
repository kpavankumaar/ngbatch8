import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DataService } from './service/data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [DataService],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
