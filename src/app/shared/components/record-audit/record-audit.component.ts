import {Component, Input} from '@angular/core';
import {AppModel} from '@core/model/app-model';

@Component({
  selector: 'app-record-audit',
  templateUrl: './record-audit.component.html',
  styleUrls: ['./record-audit.component.scss']
})
export class RecordAuditComponent {
  @Input()
  model:AppModel<any>;

}
