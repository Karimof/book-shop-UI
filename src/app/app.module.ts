import {NgModule, NO_ERRORS_SCHEMA,} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NgbModule,} from "@ng-bootstrap/ng-bootstrap";
import {BooksComponent} from './components/books/list/books.component';
import {AuthorComponent} from './components/author/author.component';
import {CommentsComponent} from './components/comments/comments.component';
import {PriceComponent} from './components/price/price.component';
import {CommonModule, NgFor} from "@angular/common";
import {BookViewComponent} from './components/books/view/book-view.component';

// import {TokenInterceptorService} from "./services/token/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    AuthorComponent,
    CommentsComponent,
    PriceComponent,
    BookViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
