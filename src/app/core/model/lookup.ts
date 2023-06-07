
import {Validators} from '@angular/forms';
import {AppModel} from '@core/model/app-model';

export class Lookup extends AppModel<string>{
  name:string;

  static fg :any  =       {
    id: [null,[Validators.required]],
    name: [null,[Validators.required]]
  };
}
