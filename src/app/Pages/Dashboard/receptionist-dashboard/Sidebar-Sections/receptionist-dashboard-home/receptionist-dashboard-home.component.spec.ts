import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistDashboardHomeComponent } from './receptionist-dashboard-home.component';

describe('ReceptionistDashboardHomeComponent', () => {
  let component: ReceptionistDashboardHomeComponent;
  let fixture: ComponentFixture<ReceptionistDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionistDashboardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptionistDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
