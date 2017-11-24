import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasCrudComponent,
    TareasComponent,
    ProyectosCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
