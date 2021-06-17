import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleUpcomingComponent } from './capsule-upcoming.component';

describe('CapsuleUpcomingComponent', () => {
  let component: CapsuleUpcomingComponent;
  let fixture: ComponentFixture<CapsuleUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsuleUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
