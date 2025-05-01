import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSerivcesCardComponent } from './our-serivces-card.component';

describe('OurSerivcesCardComponent', () => {
  let component: OurSerivcesCardComponent;
  let fixture: ComponentFixture<OurSerivcesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSerivcesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurSerivcesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
