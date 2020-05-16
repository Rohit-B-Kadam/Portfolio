import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializingInComponent } from './specializing-in.component';

describe('SpecializingInComponent', () => {
  let component: SpecializingInComponent;
  let fixture: ComponentFixture<SpecializingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
