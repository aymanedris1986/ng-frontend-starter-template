import {AppModel} from '@core/model/app-model';

export class Region extends AppModel<number>{
  regionName:string;

  static fg :any  =       {
    regionName: [null]
  };
}
