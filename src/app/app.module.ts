import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonModule, ToolbarModule, FieldsetModule, InputSwitchModule }  from 'primeng/primeng';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    ToolbarModule,
    FieldsetModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
