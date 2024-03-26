import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  standalone: true,
  imports: [],
  templateUrl: './classbinding.component.html',
  styleUrl: './classbinding.component.scss'
})
export class ClassbindingComponent {
  textColor:string = "text-bg-dark";
  disabled:boolean = false;
}
