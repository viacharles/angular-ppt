import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { RegisterComponent } from './pages/register/register.component';
import { ArticleContentComponent } from './pages/article-content/article-content.component';


const routes: Routes = [
  { path: "", redirectTo: "/article", pathMatch: "full" },
  { path: "article", component: ArticleComponent },
  { path: "article-content", component: ArticleContentComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
