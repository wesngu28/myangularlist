import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierrowComponent } from './tierrow.component';

describe('TierrowComponent', () => {
  let component: TierrowComponent;
  let fixture: ComponentFixture<TierrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
