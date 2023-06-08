import {Component, Input} from '@angular/core';
import {AppCrudModel} from '@core/model/app-crud-model';

@Component({
  selector: 'app-record-audit',
  templateUrl: './record-audit.component.html',
  styleUrls: ['./record-audit.component.scss']
})
export class RecordAuditComponent {
  @Input()
  model:AppCrudModel<any>;

}
