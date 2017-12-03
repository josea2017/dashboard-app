import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {

  proyecto: Proyecto;
  private sub: any; 	

  constructor(private route: ActivatedRoute, private service: ProyectoService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => { this.proyecto = this.service.encontrarPorNombre(params['nombre']);
     });
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

}

