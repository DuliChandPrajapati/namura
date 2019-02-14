import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatStepperModule,MatSidenavModule,
  MatExpansionModule,MatDividerModule,
  MatProgressSpinnerModule,MatTooltipModule,
  MatFormFieldModule, MatInputModule,MatSnackBarModule,
  MatOptionModule, MatTabsModule, MatDialogModule, MatTableModule,
  MatNativeDateModule, MatDatepickerModule, MatSelectModule,MatRadioModule,MatCheckboxModule
} from '@angular/material';
import { CapitalizefirstPipe } from './pipes/capitalizefirst.pipe';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { PipeModule } from './pipes/pipe.module';



@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
        MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule,
    MatOptionModule, MatTabsModule,MatTableModule,
    MatDialogModule, MatNativeDateModule ,
    MatDatepickerModule, MatSelectModule,
    MatRadioModule , MatCheckboxModule ,
    ReactiveFormsModule , MatTooltipModule ,MatSidenavModule,
    MatStepperModule, MatExpansionModule , MatDividerModule, FormsModule ,
    PipeModule, MatSnackBarModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCardModule, MatMenuModule, 
    MatGridListModule, MatListModule  
    ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule,
    MatOptionModule, MatTabsModule,MatTableModule,
    MatDialogModule, MatNativeDateModule ,
    MatDatepickerModule, MatSelectModule,
    MatRadioModule , MatCheckboxModule ,
    ReactiveFormsModule,
    MatTooltipModule , MatStepperModule, MatExpansionModule   ,
     MatDividerModule  ,FormsModule ,      PipeModule,
     MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCardModule, MatMenuModule,
     FormsModule ,      PipeModule, MatGridListModule, MatListModule 
    ],
  declarations: []
})

export class MatModule {}

