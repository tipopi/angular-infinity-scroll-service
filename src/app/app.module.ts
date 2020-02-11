import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {TestComponent} from './test/test.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ScrollingModule, 
     ],
  declarations: [ AppComponent, HelloComponent ,TestComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
