import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'stock-list',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StockListComponent implements OnChanges {

 
@Input() stockList: any;
stocks: any[] = [];
  listedStocks: any = {};
  counter = 0;
  constructor() {
      
  }

  ngOnChanges() {
   this.updateStocks(this.stockList);      
  }
  updateStocks(message) {
    message.forEach((element, index) => {
     
      if (!this.listedStocks[element[0]]) {
        this.listedStocks[element[0]] = {index: this.counter, price: element[1], name: element[0]}
        this.stocks.push({index: this.counter, price: element[1], name: element[0], priceChange: 'unchanged', 'lastUpdate': '...'});
       
        this.counter++;
      } else {
        let now = moment(new Date()).toString();
        if (element[1] > this.stocks[ this.listedStocks[element[0]].index].price) {
          this.stocks[ this.listedStocks[element[0]].index].priceChange = 'up'
        } else {
          this.stocks[ this.listedStocks[element[0]].index].priceChange = 'down'
        }
        this.stocks[ this.listedStocks[element[0]].index].price = element[1]
        let timePrefix = Number(moment(new Date()).format('HH.mm')) >= 12 ? 'PM': 'AM';
        this.stocks[ this.listedStocks[element[0]].index].lastUpdate =moment(new Date()).format('HH.mm') + timePrefix ;
        
      }
   });
  }
 
}
