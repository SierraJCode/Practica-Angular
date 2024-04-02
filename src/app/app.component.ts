import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ValidacionComponent } from './validacion/validacion.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacionComponent, ClassbindingComponent,
  PropertybindingComponent, LoginformComponent,ValidacionComponent,
  FormularioReactivoComponent, FormbuilderComponent, ChildrenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aprendiendo Angular';
  formTitle = 'Login';

}
