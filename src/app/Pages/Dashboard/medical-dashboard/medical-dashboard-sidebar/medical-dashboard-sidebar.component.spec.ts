import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDashboardSidebarComponent } from './medical-dashboard-sidebar.component';

describe('MedicalDashboardSidebarComponent', () => {
  let component: MedicalDashboardSidebarComponent;
  let fixture: ComponentFixture<MedicalDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalDashboardSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
