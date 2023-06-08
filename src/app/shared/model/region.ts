import {AppCrudModel} from '@core/model/app-crud-model';

export class Region extends AppCrudModel<number>{
  regionName:string;
  static fg :any  =       {
    regionName: [null]
  };
}
