import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoArticleComponent } from './no-article.component';

describe('NoArticleComponent', () => {
  let component: NoArticleComponent;
  let fixture: ComponentFixture<NoArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
