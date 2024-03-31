import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.scss'
})
export class ValidacionComponent {
  persona = {
    usuario: "",
    email: "",
    date: "",

    procesar(){
      alert(this.date)
    }
  }
  
  procesarDatos(){
    alert("Enviando datos..")
  }

  mostrar(){
    
  }
  
}
