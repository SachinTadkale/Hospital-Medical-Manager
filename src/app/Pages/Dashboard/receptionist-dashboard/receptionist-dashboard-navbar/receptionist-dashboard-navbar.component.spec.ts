import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistDashboardNavbarComponent } from './receptionist-dashboard-navbar.component';

describe('ReceptionistDashboardNavbarComponent', () => {
  let component: ReceptionistDashboardNavbarComponent;
  let fixture: ComponentFixture<ReceptionistDashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionistDashboardNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptionistDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
