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
  MatSelectModule
  
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
    MatSelectModule
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
    MatSelectModule
  ]
})
export class MaterialModule {}
