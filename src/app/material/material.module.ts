import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatStepperModule,
  MatMenuModule,
  MatSnackBarModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTableModule
  
} from "@angular/material";
import { NgModule } from "@angular/core";
@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class MaterialModule {}
