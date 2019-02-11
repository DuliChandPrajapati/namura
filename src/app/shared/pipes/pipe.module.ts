import { NgModule } from '@angular/core';

import { CapitalizefirstPipe } from './capitalizefirst.pipe';
import { SafehtmlPipe } from './safehtml.pipe';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [CommonModule],
  exports: [  SafehtmlPipe, CapitalizefirstPipe
  ],
  declarations: [
        CapitalizefirstPipe, SafehtmlPipe
     ]
})

export class PipeModule {}

