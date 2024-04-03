import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  @Input() title?:string;
  @Input() nombre?:string;

}
