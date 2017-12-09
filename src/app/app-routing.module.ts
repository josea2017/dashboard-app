import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareasTComponent } from './tareas-t/tareas-t.component';
import { TareatDetalleComponent } from './tareat-detalle/tareat-detalle.component';




const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'personas', component: PersonasCrudComponent },
  { path: 'personas/:nombre', component: PersonaDetalleComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'proyectos/:nombre', component: ProyectoDetalleComponent },
  { path: 'proyectos/:id/dashboard/:id', component: DashboardComponent},
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/:descripcion', component: TareaDetalleComponent },
  { path: 'tareas_t', component: TareasTComponent },
  { path: 'tareas_t/:descripcion/:id_proyecto', component: TareatDetalleComponent },
  { path: '', component: ProyectosCrudComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }