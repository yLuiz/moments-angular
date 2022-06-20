import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string = "";

  constructor() { }

  add(message: string) {

    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 2000);
  } 

  clear() {
    this.message = '';
  }
}
