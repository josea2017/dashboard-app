import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];
  tarea_actual: Tarea;
  operacion_crud = {is_new: false, is_visible: false};	

  constructor() { }

  ngOnInit() {
  	this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  	this.tarea_actual = new Tarea();
  }

  new(){
    this.tarea_actual = new Tarea();
    this.operacion_crud.is_visible = true;
    this.operacion_crud.is_new = true;
  }

  edit(row){
    this.operacion_crud.is_visible = true;
    this.operacion_crud.is_new = false;
    this.tarea_actual = row;
  }

  delete(row){
    this.operacion_crud.is_new = false;
    const index = this.tareas.indexOf(row, 0);
    if(index > -1){
      this.tareas.splice(index, 1);
    }
    this.save();
  }

  save(){
  	if(this.operacion_crud.is_new){
  		this.tareas.push(this.tarea_actual);
  	}
  	localStorage.setItem('tareas', JSON.stringify(this.tareas));
  	this.tarea_actual = new Tarea();
  	this.operacion_crud.is_visible = false;
  }

}
