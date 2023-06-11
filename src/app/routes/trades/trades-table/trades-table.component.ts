import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Trade} from '@shared/model/trade';
import {MtxGridColumn} from '@ng-matero/extensions/grid';
import {AppComponent} from '../../../app.component';
import {ApplicationComponent} from '@core/component/application-component';

@Component({
  selector: 'app-trades-trades-table',
  templateUrl: './trades-table.component.html',
  styleUrls: ['./trades-table.component.scss']
})
export class TradesTradesTableComponent extends ApplicationComponent implements OnInit {

  @Input()tradesList$:Observable<Trade[]>;
  tradesList:Trade[];

  columns: MtxGridColumn[] = [
    { header: 'Symbol', field: 'symbol' },
    { header: 'Entry Time', field: 'entryDate' },
    {
      header: 'Edit',
      field: 'operation',
      minWidth: 50,
      width: '50px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.edit(record),
        },
      ],
    }
  ];

  constructor() { super();}

  ngOnInit() {
    this.tradesList$.subscribe(
      data=>{
        this.tradesList = data;
      }
    );
  }

  log(e: any) {
    console.log(e);
  }

  edit(record: any): void {
    this.router.navigate(['/trades/trade-edit-page'], { queryParams: { id: record.id } });
  }

}
