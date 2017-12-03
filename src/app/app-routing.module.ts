import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'personas', component: PersonasCrudComponent },
  { path: 'personas/:nombre', component: PersonaDetalleComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'proyectos/:nombre', component: ProyectoDetalleComponent },
  { path: 'proyectos/:id/dashboard', component: DashboardComponent},
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/:descripcion', component: TareaDetalleComponent },
  { path: '', component: ProyectosCrudComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }