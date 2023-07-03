import {AppCrudModel} from '@core/model/app-crud-model';

export class SecUserProfile extends AppCrudModel<string>{
  userCode: string;
  userName: string;
  email: string;
  fullNameEn: string;
  fullNameAr: string;
  firstNameEn: string;
  firstNameAr: string;
  secondNameEn: string;
  secondNameAr: string;
  thirdNameEn: string;
  thirdNameAr: string;
  fourthNameEn: string;
  fourthNameAr: string;
  phone: string;
  mobile: string;
  dateOfBirth: Date;

  static fg :any  =       {
    email: [null]
  }
}
