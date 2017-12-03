import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';

@Injectable()
export class ProyectoService{
	data: Proyecto[];
	constructor(){
		this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
	}

	leer(){
		this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
		return this.data;
	}

	guardar(data: Proyecto[]){
		this.data = data;
		localStorage.setItem('proyectos', JSON.stringify(this.data));
	}

	encontrarPorNombre(id: number){
		return this.data.find(x => x.id == id)
			
	}
	
}