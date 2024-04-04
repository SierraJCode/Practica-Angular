import { Component, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

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

  constructor(public messagesService: MessagesService){}

  message?: string;

  addMessage(message:string){
    this.messagesService.add(message);
  }
  
}
