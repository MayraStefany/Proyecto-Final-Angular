import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
