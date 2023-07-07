import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPortfolioMainComponent } from './portfolio-main.component';

describe('PortfolioPortfolioMainComponent', () => {
  let component: PortfolioPortfolioMainComponent;
  let fixture: ComponentFixture<PortfolioPortfolioMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPortfolioMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPortfolioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
