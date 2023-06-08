
import {Validators} from '@angular/forms';
import {AppCrudModel} from '@core/model/app-crud-model';

export class Lookup extends AppCrudModel<string>{
  name:string;

  static fg :any  =       {
    id: [null,[Validators.required]],
    name: [null,[Validators.required]]
  };
}
