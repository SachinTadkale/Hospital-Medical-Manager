import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDashboardNavbarComponent } from './medical-dashboard-navbar.component';

describe('MedicalDashboardNavbarComponent', () => {
  let component: MedicalDashboardNavbarComponent;
  let fixture: ComponentFixture<MedicalDashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalDashboardNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
