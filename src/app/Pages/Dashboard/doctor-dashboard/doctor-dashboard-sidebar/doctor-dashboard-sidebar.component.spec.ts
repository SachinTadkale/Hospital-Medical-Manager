import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashboardSidebarComponent } from './doctor-dashboard-sidebar.component';

describe('DoctorDashboardSidebarComponent', () => {
  let component: DoctorDashboardSidebarComponent;
  let fixture: ComponentFixture<DoctorDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDashboardSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
