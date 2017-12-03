import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-detalle',
  templateUrl: './tarea-detalle.component.html',
  styleUrls: ['./tarea-detalle.component.css']
})
export class TareaDetalleComponent implements OnInit, OnDestroy {

  tarea: Tarea;
  private sub: any; 	

  constructor(private route: ActivatedRoute, private service: TareaService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => { this.tarea = this.service.encontrarPorDescripcion(params['descripcion']);
     });
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

}

