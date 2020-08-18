import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNextComponent } from './article-next.component';

describe('ArticleNextComponent', () => {
  let component: ArticleNextComponent;
  let fixture: ComponentFixture<ArticleNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
