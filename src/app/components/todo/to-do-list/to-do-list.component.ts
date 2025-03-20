import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { ToDoStatus } from '../../../models/enums/todo-status.enum';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  // @Input() items: string[] = [];
  // itemsDeleted : boolean[] = [];
  @Input() items: Todo[] = [];
  @Output() resetFactoryChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ToDoStatus = ToDoStatus;

  deleteHandler(index: number): void {
    this.items[index].status = ToDoStatus.DELETED;
  }
  restoreHandler(item: Todo): void {
    item.status = ToDoStatus.RESTORED;
  }

  clearList(): void {
    // this.items = []; Method 1
    alert('All Items Will be Deleted!!');
    this.items.length = 0; // Method 2
    // Method 3 ==> Looping
  }
  resetStatus(): void {
    this.items.forEach((item: Todo)=>{
      item.status = ToDoStatus.NEW;
    });
    alert('Items Status Updated Successfully');
    
  }
  resetFactory(): void {
    this.resetFactoryChange.emit(true); 
    alert('Based Items Reseted')
  }
}
