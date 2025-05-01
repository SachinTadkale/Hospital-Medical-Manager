import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashboardNavbarComponent } from './doctor-dashboard-navbar.component';

describe('DoctorDashboardNavbarComponent', () => {
  let component: DoctorDashboardNavbarComponent;
  let fixture: ComponentFixture<DoctorDashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDashboardNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
