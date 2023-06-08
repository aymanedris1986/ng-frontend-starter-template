import { Component, OnInit } from '@angular/core';
import {AppCrudModel} from '@core/model/app-crud-model';

@Component({
  selector: 'app-demo-regions-page',
  templateUrl: './regions-page.component.html',
  styleUrls: ['./regions-page.component.scss']
})
export class DemoRegionsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  protected readonly AppCrudModel = AppCrudModel;
}
