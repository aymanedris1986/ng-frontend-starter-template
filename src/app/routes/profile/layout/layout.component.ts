import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@core/authentication';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {AppModel} from '@core/model/app-model';
import {SecUserProfile} from '@shared/model/sec-user-profile';
import {CrudService} from '@core/service/crud-service';
import {AppCrudModel} from '@core/model/app-crud-model';
import {SecUserProfileService} from '@shared/services/application/sec-user-profile.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class ProfileLayoutComponent extends ApplicationCrudFormComponent<string> implements OnInit {
  user!: User;

  constructor(private secUserProfileService:SecUserProfileService) { super();}

  ngOnInit(): void {
    this.auth.user().subscribe(user => {(this.user = user); this.id = user.id as string;});
  }

  createNewModelObject(): AppModel {
    return new SecUserProfile();
  }

  getCrudService(): CrudService<AppCrudModel<string>, string> {
    return this.secUserProfileService;
  }

  getFormGroup(): FormGroup {
    return this.toFormGroup(SecUserProfile.fg);
  }

  getLovNames(): string[] {
    return [];
  }
}
