import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebseriesComponent } from './webseries.component';

describe('WebseriesComponent', () => {
  let component: WebseriesComponent;
  let fixture: ComponentFixture<WebseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
