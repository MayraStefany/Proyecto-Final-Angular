import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MaterialModule } from './material.module';
import {MatButtonModule} from '@angular/material/button';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { NombresYApellidosPipe } from './pipes/nombres-y-apellidos.pipe';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { TituloEstiloDirective } from './directives/titulo-estilo.directive';
import { FiltroAlumnosPipe } from './pipes/filtro-alumnos.pipe';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    EditarAlumnoDialogComponent,
    FormatoFechaPipe,
    NombresYApellidosPipe,
    ToolbarComponent,
    NavbarComponent,
    TituloEstiloDirective,
    FiltroAlumnosPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
