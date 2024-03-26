import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.scss'
})
export class InterpolacionComponent {
  numero:number = 0;

  sumarCont(){
    this.numero++;
  }

  restarCont(){
    if(this.numero > 0){
      this.numero--;
    }
    
  }
}
