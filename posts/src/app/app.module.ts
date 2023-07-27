import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { Page404Component } from './pages/page404/page404.component';
import { UppercasePipe } from './uppercase.pipe';
import { GreycolorDirective } from './greycolor.directive';
import { CutPipe } from './cut.pipe';
import { AuthorComponent } from './pages/author/author.component';
import { ModalButtonComponent } from './components/atoms/modal-button/modal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    Page404Component,
    UppercasePipe,
    GreycolorDirective,
    CutPipe,
    AuthorComponent,
    ModalButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
