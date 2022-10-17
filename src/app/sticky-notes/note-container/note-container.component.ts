import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss'],
})
export class NoteContainerComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
