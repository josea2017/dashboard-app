import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit, OnDestroy {

  persona: Persona;
  private sub: any; 	

  constructor(private route: ActivatedRoute, private service: PersonaService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => { this.persona = this.service.encontrarPorNombre(params['nombre']);
     });
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
  }

}
