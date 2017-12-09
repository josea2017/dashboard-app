import { Component, OnInit, OnDestroy } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Tarea_T } from '../tarea-t';
import { TareaTService } from '../tareat.service';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  proyecto: Proyecto;
  estados: Tarea[];
  tareat: Tarea_T[];
  tareaSeleccionada: Tarea_T;
  estadoActual: number;
  personas: Persona[];
  tareasPorPersonaReturn: Persona[];//personas
  mostrarTareasPorPersonas: boolean;
  mostrarTareasPorEstado: boolean;
  tareasPorEstadoReturn: Tarea[];//estados
  mostrarTareasPorProyecto: boolean;
  tareasPorProyectoReturn: Proyecto[];
  boolpersona: boolean;
  private sub: any;
  id: string;
  mostrarBtn = -1;
  animal: string;
  name: string;


   constructor(private route: ActivatedRoute, 
   			       private service_proyecto: ProyectoService,
   			       private service_tarea: TareaService,
               private service_tareat: TareaTService,
               private service_persona: PersonaService,
               ) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {this.proyecto = this.service_proyecto.encontrarPorNombre(params['id']);});
    this.estados = this.service_tarea.leer(); 
    this.tareat = this.service_tareat.leerPorId(this.proyecto.id, this.estados);
    this.personas = this.service_persona.leer();
    this.boolpersona = false;
    this.tareaSeleccionada = null;
    this.estadoActual = -1;
    this.tareasPorPersonaReturn = [];
    this.mostrarTareasPorPersonas = false;
    this.mostrarTareasPorEstado = false;
    this.tareasPorEstadoReturn = [];
    this.mostrarTareasPorProyecto = false;
    this.tareasPorProyectoReturn = []];

    //this.tareasPorPersona();
    
  }

  tareaNueva(indice) {
    this.mostrarBtn = indice;
  }

  cerrarTarea() {
    this.mostrarBtn = -1;
  }

  mostrarPersonas(tareaSeleccion){
    this.tareaSeleccionada = tareaSeleccion;
    this.estadoActual = (this.tareaSeleccionada.id_estado - 1);
    this.personas = this.service_persona.leer();
    this.boolpersona = true;
  }
  ocultarPersonas(){
    this.boolpersona = false;
  }

  guardar(id_proyecto, id_estado, descripcion){

    if(descripcion.trim().length > 0){
      let tarea = new Tarea_T;
      tarea.id_proyecto = id_proyecto;
      tarea.id_estado = id_estado;
      tarea.descripcion = descripcion;
      this.service_tareat.guardarUnaTarea(tarea);
      this.tareat[String(id_estado - 1)].push(tarea);
      this.cerrarTarea();
    }else{
      alert('Descripción no puede ser vacía');
    }
  }

  guardarTareaDragDrop(tarea, estadoId) { 
    this.service_tareat.guardarDragDropTarea(tarea, estadoId);
  }

  guardarPersonaTarea(auxPersona){
    //tareaSeleccionada: Tarea_T;
    //estadoActual: number;
    let aux;
    aux = auxPersona;
    this.service_tareat.guardarPersonaTarea(this.tareaSeleccionada, aux);
    //alert(this.estadoActual);
    this.ocultarPersonas();
  }

  tareasPorPersona(){

    this.mostrarTareasPorPersonas = true;
    let tareaAux = this.service_tareat.leer();

    for (var i = 0; i < this.personas.length; i++) {
      let contador = 0;
      for (var j = 0; j < tareaAux.length; j++) {
        if (this.personas[i].id == tareaAux[j].id_persona) {
            this.tareasPorPersonaReturn[i] = this.personas[i];
            contador++;
        } 
      }
      this.tareasPorPersonaReturn[i].avatar = String(contador);      
    }
  }

  tareasPorEstado(){

    this.mostrarTareasPorEstado = true;
    let tareaAux = this.service_tareat.leer();//tareas

    for (var i = 0; i < this.estados.length; i++) {
      let contador = 0;
      for (var j = 0; j < tareaAux.length; j++) {
        if(this.proyecto.id == tareaAux[j].id_proyecto && this.estados[i].id == tareaAux[j].id_estado){
          this.tareasPorEstadoReturn[i] = this.estados[i];
          contador++;
        }
      }
      if(contador > 0)
      {
        this.tareasPorEstadoReturn[i].orden = contador;
      }else{
        this.tareasPorEstadoReturn[i] = this.estados[i];
        this.tareasPorEstadoReturn[i].orden = 0;
      }
    }
  }

  tareasPorProyecto(){

    this.mostrarTareasPorProyecto = true;
    let tareaAux = this.service_tareat.leer();//tareas
    let contador = 0;
    let constante = 0;
    for (var i = 0; i < tareaAux.length; i++) {
      if(tareaAux[i].id_proyecto == this.proyecto.id){
        this.tareasPorProyectoReturn[constante] = this.proyecto;
        contador++;
      }
    }
    if(contador > 0){
      this.tareasPorProyectoReturn[constante].num_personas = contador;//cantidad de tareas por proyecto
    }else{
      this.tareasPorProyectoReturn[constante] = this.proyecto;
      this.tareasPorProyectoReturn[constante].id = this.proyecto.id;
      this.tareasPorProyectoReturn[constante].nombre = this.proyecto.nombre;
      this.tareasPorProyectoReturn[constante].num_personas = contador;
    }
  
  }

   ngOnDestroy(){
    this.sub.unsubscribe();
  }

   
}
 

