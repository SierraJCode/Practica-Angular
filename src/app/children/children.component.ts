import { Component, Input } from '@angular/core';
import { MessagesService } from '../messages.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  @Input() title?:string;
  @Input() nombre?:string;

  constructor(public messagesService: MessagesService){}

  message: string = '';

  addMessage(){
    this.messagesService.add(this.message);
    alert(this.message);
    this.message = '';
  }
  
}
