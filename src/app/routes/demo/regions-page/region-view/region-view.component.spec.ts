import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRegionsPageRegionViewComponent } from './region-view.component';

describe('DemoRegionsPageRegionViewComponent', () => {
  let component: DemoRegionsPageRegionViewComponent;
  let fixture: ComponentFixture<DemoRegionsPageRegionViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRegionsPageRegionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRegionsPageRegionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
