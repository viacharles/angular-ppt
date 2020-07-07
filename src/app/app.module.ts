import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleContentComponent } from './pages/article-content/article-content.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { OverlayComponent } from './overlay/overlay/overlay.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleContentComponent,
    RegisterComponent,
    NavigationComponent,
    NavComponent,
    LayoutComponent,
    OverlayComponent,
    CommentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
