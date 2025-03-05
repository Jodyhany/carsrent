import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentcarsComponent } from './recentcars.component';

describe('RecentcarsComponent', () => {
  let component: RecentcarsComponent;
  let fixture: ComponentFixture<RecentcarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentcarsComponent]
    });
    fixture = TestBed.createComponent(RecentcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
