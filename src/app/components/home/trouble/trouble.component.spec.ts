import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleComponent } from './trouble.component';

describe('TroubleComponent', () => {
  let component: TroubleComponent;
  let fixture: ComponentFixture<TroubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TroubleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
