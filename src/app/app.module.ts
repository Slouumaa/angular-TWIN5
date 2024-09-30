import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ContainsPipe } from './pipe/contains.pipe';
import { HighlightDirective } from './directives/highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//taaraf awel page
})
export class AppModule { }
