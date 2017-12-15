import { Injectable } from '@angular/core';
import { Tarea_T } from './tarea-t';
import {Tarea} from './tarea';

@Injectable()
export class TareaTService{

	data: Tarea_T[];
	
	dataaux: Tarea_T;

	constructor(){
		this.data = JSON.parse(localStorage.getItem('tareas_t') || '[]');
	}

	leer(){
		
		this.data = JSON.parse(localStorage.getItem('tareas_t') || '[]');
		return this.data;
	}
    //id de proyecto y estados
	leerPorId(id: number, estados: Tarea[]) {
    let datareturn = [];
    let datatareas = [];
    for (var e = 0; e < estados.length; e++) {
      datatareas = [];
      for (var i = 0; i < this.data.length; i++) {

        if (this.data[i].id_proyecto == id && this.data[i].id_estado == estados[e].id) {

          datatareas.push(this.data[i]);
        }
      }
      datareturn.push(datatareas);
    }
    return datareturn;
  }

  	guardarUnaTarea(tarea: Tarea_T){
  		this.data.push(tarea);
  		localStorage.setItem('tareas_t', JSON.stringify(this.data));

  	}

	guardar(data: Tarea_T[]){
		this.data = data;
		localStorage.setItem('tareas_t', JSON.stringify(this.data));
	}

	encontrarPorDescripcion(descripcion: string){
		return this.data.find(x => x.descripcion == descripcion)
			
	}

	encontrarPorIdProyecto(id_proyecto: number){
		return this.data.find(x => x.id_proyecto == id_proyecto)
			
	}

	guardarDragDropTarea(tarea, nuevoIdEstado) {

    const index = this.data.indexOf(tarea);
    /*
    // removemos del array tareas el indice que guarda al elemento donde se hizo drag y drop
    this.data.splice(index, 1);
    // actualiza el estado.id de la tarea que se quiere modificar
    tarea.id_estado = nuevoIdEstado;
    this.data.push(tarea);*/
    this.data[index].id_estado = nuevoIdEstado;
    localStorage.setItem('tareas_t', JSON.stringify(this.data));
  }
	
	
}
