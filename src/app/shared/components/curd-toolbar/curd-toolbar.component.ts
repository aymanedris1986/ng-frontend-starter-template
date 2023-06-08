import {Component, Input} from '@angular/core';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';

@Component({
  selector: 'app-curd-toolbar',
  templateUrl: './curd-toolbar.component.html',
  styleUrls: ['./curd-toolbar.component.scss']
})
export class CurdToolbarComponent {
  @Input()crudComponent:ApplicationCrudFormComponent<any>;
  @Input()forceShow:boolean;
  constructor() {
    this.forceShow = false;
  }
}
