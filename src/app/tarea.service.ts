import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class TareaService{
	data: Tarea[];
	constructor(){
		this.data = JSON.parse(localStorage.getItem('tareas') || '[]');
	}

	leer(){
		this.data = JSON.parse(localStorage.getItem('tareas') || '[]');
		return this.data;
	}

	guardar(data: Tarea[]){
		this.data = data;
		localStorage.setItem('tareas', JSON.stringify(this.data));
	}

	encontrarPorDescripcion(descripcion: string){
		return this.data.find(x => x.descripcion == descripcion)
			
	}
	
}
