import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeismoneyComponent } from './lifeismoney.component';

describe('LifeismoneyComponent', () => {
  let component: LifeismoneyComponent;
  let fixture: ComponentFixture<LifeismoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeismoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeismoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
