import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRegionsPageComponent } from './regions-page.component';

describe('DemoRegionsPageComponent', () => {
  let component: DemoRegionsPageComponent;
  let fixture: ComponentFixture<DemoRegionsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRegionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRegionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
