import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes =[
    {path: 'alumnos', component: AlumnosComponent},
    {path: '', redirectTo: 'alumnos', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }