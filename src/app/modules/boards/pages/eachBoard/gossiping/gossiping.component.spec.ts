import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipingComponent } from './gossiping.component';

describe('GossipingComponent', () => {
  let component: GossipingComponent;
  let fixture: ComponentFixture<GossipingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GossipingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GossipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
