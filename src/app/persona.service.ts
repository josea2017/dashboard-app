import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable()
export class PersonaService{
	data: Persona[];
	constructor(){
		this.data = JSON.parse(localStorage.getItem('personas') || '[]');
	}

	leer(){
		this.data = JSON.parse(localStorage.getItem('personas') || '[]');
		return this.data;
	}

	guardar(data: Persona[]){
		this.data = data;
		localStorage.setItem('personas', JSON.stringify(this.data));
	}

	encontrarPorNombre(nombre: string){
		return this.data.find(x => x.nombre == nombre)
			
	}
	
}
