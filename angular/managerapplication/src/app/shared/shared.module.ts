import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe],
})
export class SharedModule { }
