import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PersonaService } from './persona.service';
import { TareaService } from './tarea.service';
import { ProyectoService } from './proyecto.service';
import { TareaTService } from './tareat.service';



import { AppComponent } from './app.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareasTComponent } from './tareas-t/tareas-t.component';
import { TareatDetalleComponent } from './tareat-detalle/tareat-detalle.component';
import {DndModule} from 'ng2-dnd';



@NgModule({
  declarations: [
    AppComponent,
    PersonasCrudComponent,
    TareasComponent,
    ProyectosCrudComponent,
    PersonaDetalleComponent,
    DashboardComponent,
    TareaDetalleComponent,
    ProyectoDetalleComponent,
    TareasTComponent,
    TareatDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
              PersonaService,
              TareaService,
              ProyectoService,
              TareaTService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
