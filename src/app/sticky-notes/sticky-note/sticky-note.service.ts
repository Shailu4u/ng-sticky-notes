import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { StickyNoteComponent } from './sticky-note.component';
import { Subject } from 'rxjs';
import { StickyNoteDto } from './sticky-note-dto';

@Injectable({ providedIn: 'root' })
export class StickyNoteService implements OnDestroy {
  private noteSubject = new Subject<StickyNoteDto>();

  constructor(private componentFactory: ComponentFactoryResolver) {}

  public open(noteTemplateRef: () => ViewContainerRef): void {
    this.noteSubject.asObservable().subscribe((helpTextData) => {
      const stickyNoteComponent = this.createNoteComponent(noteTemplateRef);
      stickyNoteComponent.instance.openNote(helpTextData);
    });
  }

  public initOpenNote({ content }: StickyNoteDto): void {
    // , event: MouseEvent
    this.noteSubject.next({
      content,
      // coordinates: event,
    });
  }

  private createNoteComponent(
    stickyNotesRef: () => ViewContainerRef
  ): ComponentRef<StickyNoteComponent> {
    const factory =
      this.componentFactory.resolveComponentFactory(StickyNoteComponent);
    return stickyNotesRef().createComponent(factory);
  }

  ngOnDestroy(): void {
    this.noteSubject.unsubscribe();
  }
}
