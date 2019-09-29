import { Component, OnInit } from '@angular/core';

import { WebsocketService } from './websocket-service/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  stocks: any[] = [];
  url: string = "ws://stocks.mnet.website";;
  constructor(private wsService: WebsocketService) {
      
  }

  ngOnInit() {
   
     this.wsService.createConnection(this.url).subscribe((message) => {
           this.stocks = message;
        
      })
         
  }
  
}
