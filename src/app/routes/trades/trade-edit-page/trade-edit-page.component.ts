import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trades-trade-edit-page',
  templateUrl: './trade-edit-page.component.html',
  styleUrls: ['./trade-edit-page.component.scss']
})
export class TradesTradeEditPageComponent implements OnInit {
  tradeId:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tradeId = params.id;
    });
  }

}
