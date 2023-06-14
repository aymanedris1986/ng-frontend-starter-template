import { Component, OnInit } from '@angular/core';
import {TradeService} from '@shared/services/application/trade.service';
import {Observable, of} from 'rxjs';
import {Trade} from '@shared/model/trade';

@Component({
  selector: 'app-trades-all-trades',
  templateUrl: './all-trades.component.html',
  styleUrls: ['./all-trades.component.scss']
})
export class TradesAllTradesComponent implements OnInit {
  tradeList$:Observable<Trade[]>;
  selectedTrades:Trade[] = [];
  bulkEditTrades:Trade[] = [];
  constructor(private tradeService:TradeService) { }

  ngOnInit() {
    this.tradeService.getAll().subscribe(
      data=>{
        this.tradeList$ = of(data.data);
      }
    );
  }

  rowSelectedEvent(event:any){
    this.selectedTrades = event;
  }

  bulkEdit(){
    this.bulkEditTrades = this.selectedTrades;
  }

}
