import { Component } from '@angular/core';
import { Actividad } from './actividad.interface';



@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})

export class ActicidadComponent {
  actividades: Actividad[]=[];

  nuevaActividad: Actividad={} as Actividad;
  
  
  
  
  agregarActividad() {
    this.actividades.push(this.nuevaActividad={
      fecha: this.nuevaActividad.fecha,
      hora: this.nuevaActividad.hora,
      texto: this.nuevaActividad.texto,
      detalle: this.nuevaActividad.detalle,
      estado: 'pendiente'
    });
    this.nuevaActividad= {}as Actividad;
  }
}
