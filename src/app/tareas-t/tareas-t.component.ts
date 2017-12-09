import { Component, OnInit } from '@angular/core';
import { Tarea_T } from '../tarea-t';

@Component({
  selector: 'app-tareas-t',
  templateUrl: './tareas-t.component.html',
  styleUrls: ['./tareas-t.component.css']
})
export class TareasTComponent implements OnInit {

  tareas_t: Tarea_T[];
  tarea_t_actual: Tarea_T;
  operacion_crud = {is_new: false, is_visible: false};	

  constructor() {}

  ngOnInit() {
  	this.tareas_t = JSON.parse(localStorage.getItem('tareas_t') || '[]');
  	this.tarea_t_actual = new Tarea_T();
  }

  new(){
    this.tarea_t_actual = new Tarea_T();
    this.operacion_crud.is_visible = true;
    this.operacion_crud.is_new = true;
  }

  edit(row){
    this.operacion_crud.is_visible = true;
    this.operacion_crud.is_new = false;
    this.tarea_t_actual = row;
  }

  delete(row){
    this.operacion_crud.is_new = false;
    const index = this.tareas_t.indexOf(row, 0);
    if(index > -1){
      this.tareas_t.splice(index, 1);
    }
    this.save();
  }

  save(){
  	if(this.operacion_crud.is_new){
  		this.tareas_t.push(this.tarea_t_actual);
  	}
  	localStorage.setItem('tareas_t', JSON.stringify(this.tareas_t));
  	this.tarea_t_actual = new Tarea_T();
  	this.operacion_crud.is_visible = false;
  }

}
