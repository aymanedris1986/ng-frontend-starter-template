import {Component, Input, OnInit} from '@angular/core';
import {Trade} from '@shared/model/trade';

@Component({
  selector: 'app-trades-trade-bulk-editor',
  templateUrl: './trade-bulk-editor.component.html',
  styleUrls: ['./trade-bulk-editor.component.scss']
})
export class TradesTradeBulkEditorComponent implements OnInit {

  @Input()bulkEditTrades:Trade[] = [];

  constructor() { }

  ngOnInit() {
  }


}
