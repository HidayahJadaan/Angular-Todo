import { Component } from '@angular/core';
import { ToDoListComponent } from '../todo/to-do-list/to-do-list.component';
import { ToDoFormComponent } from '../todo/to-do-form/to-do-form.component';
import { Todo } from '../../models/todo.model';
import { ToDoStatus } from '../../models/enums/todo-status.enum';

@Component({
  selector: 'app-to-do-list-page',
  imports: [ToDoListComponent, ToDoFormComponent],
  templateUrl: './to-do-list-page.component.html',
  styleUrl: './to-do-list-page.component.scss',
})
export class ToDoListPageComponent {
  initItems(): Todo[] {
    return [
      { title: 'Angular 19', status: ToDoStatus.NEW },
      { title: 'C#', status: ToDoStatus.NEW },
      { title: 'Node JS', status: ToDoStatus.NEW },
      { title: 'React JS', status: ToDoStatus.NEW },
      { title: 'Javascript', status: ToDoStatus.NEW },
    ];
  }

  items: Todo[] = this.initItems();

  itemAddedHandler(item: string): void {
    const itemToAdd: Todo = { title: item, status: ToDoStatus.NEW };
    alert('Item Added Successfully')
    this.items.push(itemToAdd);
  }

  resetFactoryHandler(status: boolean):void{
    if(status){
      this.items = this.initItems();
    }
  }
}
