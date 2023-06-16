import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MtxDialogData} from '@ng-matero/extensions/dialog';
import {TradesTradeEditFormComponent} from '../trade-edit-form/trade-edit-form.component';
import {TradesNewPairAddComponent} from '../new-pair-add/new-pair-add.component';
import {EditableLookup} from '@shared/model/editable-lookup';

@Component({
  selector: 'app-trades-new-pair-dialog',
  templateUrl: './new-pair-dialog.component.html',
  styleUrls: ['./new-pair-dialog.component.scss']
})
export class TradesNewPairDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TradesNewPairDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: MtxDialogData) {
    const dData:any = data;
  }

  ngOnInit() {
  }

  submit(pair: TradesNewPairAddComponent) {
    const el:EditableLookup =  pair.model as EditableLookup;
    pair.submit();
    this.dialogRef.close(el.code);
  }
}
