import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';


@Component({
  selector: 'app-proyectos-crud',
  templateUrl: './proyectos-crud.component.html',
  styleUrls: ['./proyectos-crud.component.css']
})
export class ProyectosCrudComponent implements OnInit {

  proyectos: Proyecto[];
  proyecto_actual: Proyecto;
  operacion_crud = {is_new: false, is_visible: false};	

  constructor() { }

  ngOnInit() {
  	this.proyectos = JSON.parse(localStorage.getItem('proyectos') || '[]');
  	this.proyecto_actual = new Proyecto();
  }

  new(){
  	this.proyecto_actual = new Proyecto();
  	this.operacion_crud.is_visible = true;
  	this.operacion_crud.is_new = true;
  }

  edit(row){
  	this.operacion_crud.is_visible = true;
  	this.operacion_crud.is_new = false;
  	this.proyecto_actual = row;
  }

  delete(row){
  	this.operacion_crud.is_new = false;
  	const index = this.proyectos.indexOf(row, 0);
  	if(index > -1){
  		this.proyectos.splice(index, 1);
  	}
  	this.save();
  }

  save(){
  	if(this.operacion_crud.is_new){
  		this.proyectos.push(this.proyecto_actual);
  	}
  	localStorage.setItem('proyectos', JSON.stringify(this.proyectos));
  	this.proyecto_actual = new Proyecto();
  	this.operacion_crud.is_visible = false;

  }

}
