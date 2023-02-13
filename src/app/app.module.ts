import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MaterialModule } from './material.module';
import {MatButtonModule} from '@angular/material/button';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    EditarAlumnoDialogComponent,
    FormatoFechaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
