import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Trade} from '@shared/model/trade';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {TradesTradeEditFormComponent} from '../trade-edit-form/trade-edit-form.component';

@Component({
  selector: 'app-trades-trade-bulk-editor',
  templateUrl: './trade-bulk-editor.component.html',
  styleUrls: ['./trade-bulk-editor.component.scss']
})
export class TradesTradeBulkEditorComponent implements OnInit {

  @Input()bulkEditTrades:Trade[] = [];
  currentIndex = 0;

  @ViewChildren(TradesTradeEditFormComponent) form: QueryList<TradesTradeEditFormComponent>


  constructor() { }

  ngOnInit() {
  }

  selectionChange(event:StepperSelectionEvent){
    this.currentIndex = event.selectedIndex;
    this.form.get(event.previouslySelectedIndex)?.submit();
  }

  get currentForm():TradesTradeEditFormComponent | undefined{
    return  ;
  }

  isHasError(index:number):boolean{
    return !this.form?.get(index)?.fg.valid;
  }



}
