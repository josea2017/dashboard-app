import { Component, OnInit, OnDestroy } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Tarea_T } from '../tarea-t';
import { TareaTService } from '../tareat.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  proyecto: Proyecto;
  estados: Tarea[];
  tareat: Tarea_T[];
  private sub: any;
  id: string;
  mostrarBtn = -1;
  animal: string;
  name: string;


   constructor(private route: ActivatedRoute, 
   			       private service_proyecto: ProyectoService,
   			       private service_tarea: TareaService,
               private service_tareat: TareaTService,
               ) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {this.proyecto = this.service_proyecto.encontrarPorNombre(params['id']);});
    this.estados = this.service_tarea.leer(); 
    this.tareat = this.service_tareat.leerPorId(this.proyecto.id, this.estados);
    
  }

  tareaNueva(indice) {
    this.mostrarBtn = indice;
  }

  cerrarTarea() {
    this.mostrarBtn = -1;
  }

 
  /*
  abrirVentanaPersonas(){
    this.operacion_tarea.open_window = true;
    if(this.operacion_tarea.open_window == true){
      alert(this.operacion_tarea.open_window);

    }
  }*/



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


  

   ngOnDestroy(){
    this.sub.unsubscribe();
  }

   
}
 

