import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'emit-button',
  template: `<button mat-raised-button color="primary" (click)="add()">{{ type }}</button>`,
})
export class EmitComponent {
  @Input() type: string;
  @Output() addEmit = new EventEmitter<string>();
  add() {
    this.addEmit.emit(this.type);
    //document.dispatchEvent(new CustomEvent('addEmit', { detail: this.type }));
  }
}
