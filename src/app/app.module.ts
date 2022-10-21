import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  FullscreenOverlayContainer,
  OverlayContainer,
  OverlayModule,
} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { StickyNoteComponent } from './sticky-notes/sticky-note/sticky-note.component';
import { NoteContainerComponent } from './sticky-notes/note-container/note-container.component';

@NgModule({
  declarations: [AppComponent, StickyNoteComponent, NoteContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    OverlayModule,
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
