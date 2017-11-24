import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';


@Component({
  selector: 'app-personas-crud',
  templateUrl: './personas-crud.component.html',
  styleUrls: ['./personas-crud.component.css']
})
export class PersonasCrudComponent implements OnInit {

  personas: Persona[];
  persona_actual: Persona;
  operacion_crud = {is_new: false, is_visible: false};	

  constructor() { }

  ngOnInit() {
  	this.personas = JSON.parse(localStorage.getItem('personas') || '[]');
    this.persona_actual = new Persona();  
  }

  new(){
  	this.persona_actual = new Persona();
  	this.operacion_crud.is_visible = true;
  	this.operacion_crud.is_new = true;
  }

  edit(row){
    this.operacion_crud.is_visible = true;
    this.operacion_crud.is_new = false;
    this.persona_actual = row;
  }

  delete(row){
    this.operacion_crud.is_new = false;
    const index = this.personas.indexOf(row, 0);
    if (index > -1){
      this.personas.splice(index, 1);
    }
    this.save();
  }

  save(){
    if(this.operacion_crud.is_new){
      this.personas.push(this.persona_actual);
    }
    localStorage.setItem('personas', JSON.stringify(this.personas));
    this.persona_actual = new Persona();
    this.operacion_crud.is_visible = false;
  }

}
