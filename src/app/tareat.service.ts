import { Injectable } from '@angular/core';
import { Tarea_T } from './tarea-t';

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

	leerPorId(id: number){
		var datareturn = [];
		for (var i = 0; i < this.data.length; i++) {

			if (this.data[i].id_proyecto == id) {
				datareturn.push(this.data[i]);				
			}
		}
		return datareturn;
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
	
	
}
