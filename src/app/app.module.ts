import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BooksComponent} from './components/books/books.component';
import {AuthorComponent} from './components/author/author.component';
import {CommentsComponent} from './components/comments/comments.component';
import {PriceComponent} from './components/price/price.component';

// import {TokenInterceptorService} from "./services/token/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    AuthorComponent,
    CommentsComponent,
    PriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
