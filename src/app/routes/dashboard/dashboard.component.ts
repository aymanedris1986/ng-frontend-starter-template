import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { SettingsService } from '@core';
import {Observable, of, Subscription} from 'rxjs';

import { DashboardService } from './dashboard.service';
import {DashboardNumber} from '@shared/model/dashboard-number';
import {DashboardServiceService} from '@shared/services/application/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  messages = this.dashboardSrv.getMessages();

  charts = this.dashboardSrv.getCharts();
  chart1: any;
  chart2: any;

  stats = this.dashboardSrv.getStats();

  notifySubscription!: Subscription;

  dashboardNumber:DashboardNumber;

  constructor(
    private ngZone: NgZone,
    private dashboardSrv: DashboardService,
    private settings: SettingsService,
    private dashboardService:DashboardServiceService
  ) {}

  ngOnInit() {
    this.notifySubscription = this.settings.notify.subscribe(res => {
      console.log(res);
    });
    this.dashboardService.dashboardNumbers().subscribe(
      data =>{
        this.dashboardNumber = data.data;
        //this.dashboardNumber$ = of(this.dashboardNumber);
      }
    );
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => this.initChart());
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1?.destroy();
    }
    if (this.chart2) {
      this.chart2?.destroy();
    }

    this.notifySubscription.unsubscribe();
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1?.render();
    this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2?.render();
  }
}
