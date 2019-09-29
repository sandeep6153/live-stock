import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebsocketService } from './websocket-service/websocket.service';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list-component/stocklist.component'
@NgModule({
  declarations: [
    AppComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
