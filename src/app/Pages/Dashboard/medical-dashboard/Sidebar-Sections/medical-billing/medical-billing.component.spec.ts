import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBillingComponent } from './medical-billing.component';

describe('MedicalBillingComponent', () => {
  let component: MedicalBillingComponent;
  let fixture: ComponentFixture<MedicalBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalBillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
