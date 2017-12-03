import { Component, OnInit, OnDestroy } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  proyecto: Proyecto;
  tarea: Tarea[];
  private sub: any;
   constructor(private route: ActivatedRoute, 
   			       private service_proyecto: ProyectoService,
   			       private service_tarea: TareaService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {this.proyecto = this.service_proyecto.encontrarPorNombre(params['id']);});
    this.tarea = this.service_tarea.leer();
  }

   ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
 

