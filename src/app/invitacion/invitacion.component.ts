import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent {
  nombre!: string;
  numeroInvitados!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.numeroInvitados = +params['numero'];
    });
  }
}

