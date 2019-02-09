import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloughComponent } from './plough.component';

describe('PloughComponent', () => {
  let component: PloughComponent;
  let fixture: ComponentFixture<PloughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
