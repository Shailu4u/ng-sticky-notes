import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { NoteComponent } from './sticky-notes/note/note.component';
import { NoteContainerComponent } from './sticky-notes/note-container/note-container.component';

@NgModule({
  declarations: [AppComponent, NoteComponent, NoteContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
