import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ApplicationCrudFormComponent} from '@core/component/application-crud-form-component';
import {User} from '@core';
import {SecUserProfileService} from '@shared/services/application/sec-user-profile.service';
import {AppModel} from '@core/model/app-model';
import {SecUserProfile} from '@shared/model/sec-user-profile';
import {CrudService} from '@core/service/crud-service';
import {AppCrudModel} from '@core/model/app-crud-model';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class ProfileSettingsComponent extends ApplicationCrudFormComponent<string> implements OnInit{
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
