import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisedComponent } from './specialised.component';

describe('SpecialisedComponent', () => {
  let component: SpecialisedComponent;
  let fixture: ComponentFixture<SpecialisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialisedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
