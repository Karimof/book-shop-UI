import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {BooksComponent} from "./components/books/list/books.component";
import {AuthorComponent} from "./components/author/author.component";
import {BookViewComponent} from "./components/books/view/book-view.component";
import {ErrorComponent} from "./components/error/error.component";
import {AdminHomeComponent} from "./components/admin/admin-home/admin-home.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "books", component: BooksComponent},
  {path: "author", component: AuthorComponent},
  {path: "book-view/:id", component: BookViewComponent},
  {path: "error", component: ErrorComponent},
  {path: "admin-home", component: AdminHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
