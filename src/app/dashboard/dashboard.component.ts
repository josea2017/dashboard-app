import { Component, OnInit, OnDestroy } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Tarea_T } from '../tarea-t';
import { TareaTService } from '../tareat.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  proyecto: Proyecto;
  tarea: Tarea[];
  tareat: Tarea_T[];
  private sub: any;
  id: string;


   constructor(private route: ActivatedRoute, 
   			       private service_proyecto: ProyectoService,
   			       private service_tarea: TareaService,
               private service_tareat: TareaTService,
               ) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {this.proyecto = this.service_proyecto.encontrarPorNombre(params['id']);});
    this.tarea = this.service_tarea.leer(); 
    this.tareat = this.service_tareat.leerPorId(this.proyecto.id);
  }
    

   ngOnDestroy(){
    this.sub.unsubscribe();
  }

  dragStart(ev){
    alert("hello");
    this.id = ev.target.id;
    alert(this.id);
  }

  allowDrop(ev){
    ev.preventDefault();
  }

  drop(ev){
    ev.target.append(document.getElementById(this.id));

  }

}
 

