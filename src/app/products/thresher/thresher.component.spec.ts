import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresherComponent } from './thresher.component';

describe('ThresherComponent', () => {
  let component: ThresherComponent;
  let fixture: ComponentFixture<ThresherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThresherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
