import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonaService } from './persona.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonasCrudComponent,
    TareasComponent,
    ProyectosCrudComponent,
    PersonaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
