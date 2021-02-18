import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './component/app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, FormsModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
