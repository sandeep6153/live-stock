import { Injectable } from "@angular/core";


import { webSocket } from 'rxjs/webSocket';
export interface Message {
  author: string;
  message: string;
}
@Injectable()
export class WebsocketService {
  socket$;
  
  constructor() {}
  createConnection(url) {
   this.socket$ = webSocket(url);
   return this.socket$;
  }
  disconnect() {
    this.socket$.complete();
  }

}