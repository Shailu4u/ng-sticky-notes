import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StickyNoteService } from '../sticky-note/sticky-note.service';

@Component({
  selector: 'app-sticky-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss'],
})
export class NoteContainerComponent implements OnInit {
  @ViewChild('StickyNoteTemplate', {
    read: ViewContainerRef,
  })
  stickyNoteTemplate: ViewContainerRef;

  constructor(private stickyNoteService: StickyNoteService) {}

  ngOnInit(): void {
    this.listenOpenStickyNotes();
  }

  private listenOpenStickyNotes(): void {
    this.stickyNoteService.open(() => this.stickyNoteTemplate);
  }

  openNote() {
    this.stickyNoteService.initOpenNote({
      content: 'sdfsdf',
    });
  }
}
