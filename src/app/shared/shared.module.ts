import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowercasePipe } from './pipes/lowercase.pipe';
import { GraphDirective } from './directives/graph.directive';

@NgModule({
  declarations: [LowercasePipe, GraphDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
