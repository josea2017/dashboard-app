import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaTService } from '../tareat.service';
import { Tarea_T } from '../tarea-t';

@Component({
  selector: 'app-tareat-detalle',
  templateUrl: './tareat-detalle.component.html',
  styleUrls: ['./tareat-detalle.component.css']
})
export class TareatDetalleComponent implements OnInit {

  tareat: Tarea_T;
  private sub: any; 	

  constructor(private route: ActivatedRoute, private serviceD: TareaTService, private serviceIP: TareaTService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => { this.tareat = this.serviceD.encontrarPorDescripcion(params['descripcion']);
     });
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

}
