import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecommComponent } from './mobilecomm.component';

describe('MobilecommComponent', () => {
  let component: MobilecommComponent;
  let fixture: ComponentFixture<MobilecommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
