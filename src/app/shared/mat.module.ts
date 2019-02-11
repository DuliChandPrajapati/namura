import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

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
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import { MatFormFieldModule, MatInputModule,  MatOptionModule, MatTabsModule, MatDialogModule,  MatNativeDateModule } from '@angular/material';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCheckboxModule } from '@angular/material/checkbox';
import { CapitalizefirstPipe } from './pipes/capitalizefirst.pipe';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatDividerModule} from '@angular/material/divider';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { PipeModule } from './pipes/pipe.module';



@NgModule({
  imports: [
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
    ReactiveFormsModule , MatTooltipModule ,MatSidenavModule,
    MatStepperModule, MatExpansionModule , MatDividerModule, FormsModule ,
    PipeModule, MatSnackBarModule
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
     MatDividerModule  ,FormsModule ,      PipeModule
    ],
  declarations: []
})

export class MatModule {}

