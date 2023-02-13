import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
