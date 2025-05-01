import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDashboardHomeComponent } from './medical-dashboard-home.component';

describe('MedicalDashboardHomeComponent', () => {
  let component: MedicalDashboardHomeComponent;
  let fixture: ComponentFixture<MedicalDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalDashboardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
