import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { LoginformComponent } from './loginform/loginform.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, InterpolacionComponent, ClassbindingComponent, PropertybindingComponent, LoginformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aprendiendo Angular';
  formTitle = 'Login';
}
