import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImproveComponent } from './improve.component';

describe('ImproveComponent', () => {
  let component: ImproveComponent;
  let fixture: ComponentFixture<ImproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
