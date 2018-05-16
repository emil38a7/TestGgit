import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { QuestionComponent } from './components/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
