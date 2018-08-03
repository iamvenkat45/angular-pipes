import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitlePipe } from './title.pipe';
import { LimitPipe } from './limit.pipe';
import { HeadPipe } from 'angular-pipes';

@NgModule({
  declarations: [
    AppComponent,
    TitlePipe,
    LimitPipe,
    HeadPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
