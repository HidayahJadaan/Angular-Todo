import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.scss',
})
export class ToDoFormComponent {
  item: string = '';
  @Output() itemAdded: EventEmitter<string> = new EventEmitter<string>();

  clickHandler(): void {
    this.itemAdded.emit(this.item);
  }

  

} 
