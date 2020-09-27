import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootOverlayComponent } from './foot-overlay.component';

describe('FootOverlayComponent', () => {
  let component: FootOverlayComponent;
  let fixture: ComponentFixture<FootOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
