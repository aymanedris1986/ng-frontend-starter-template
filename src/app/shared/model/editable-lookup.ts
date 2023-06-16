import {AppCrudModel} from '@core/model/app-crud-model';

export class EditableLookup extends AppCrudModel<number>{
  lookupType:string;
  code:string;
  name:string;
  descriptionAr:string;

  static fg :any  =       {
    lookupType:['SYMBOL'],
    code: [null],
    name:[null]
  };
}
