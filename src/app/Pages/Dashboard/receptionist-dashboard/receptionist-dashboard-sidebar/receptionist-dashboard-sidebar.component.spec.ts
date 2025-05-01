import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistDashboardSidebarComponent } from './receptionist-dashboard-sidebar.component';

describe('ReceptionistDashboardSidebarComponent', () => {
  let component: ReceptionistDashboardSidebarComponent;
  let fixture: ComponentFixture<ReceptionistDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptionistDashboardSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptionistDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
