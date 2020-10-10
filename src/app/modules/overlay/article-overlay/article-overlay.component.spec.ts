import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOverlayComponent } from './article-overlay.component';

describe('ArticleOverlayComponent', () => {
  let component: ArticleOverlayComponent;
  let fixture: ComponentFixture<ArticleOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
