import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  
  messages: string[] = ['a', 'b'];

  add(message:string){
    this.messages.push(message);
  }
}
