import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NoteComponent } from './sticky-notes/note/note.component';

@NgModule({
  declarations: [AppComponent, NoteComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
