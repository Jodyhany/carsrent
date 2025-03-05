import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItworkComponent } from './how-itwork.component';

describe('HowItworkComponent', () => {
  let component: HowItworkComponent;
  let fixture: ComponentFixture<HowItworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowItworkComponent]
    });
    fixture = TestBed.createComponent(HowItworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
