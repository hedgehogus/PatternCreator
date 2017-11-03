import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PatternComponent } from './pattern.component';
import { ColorComponent } from './color.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
