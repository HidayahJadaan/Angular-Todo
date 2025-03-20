import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListPageComponent } from "./components/to-do-list-page/to-do-list-page.component";

@Component({
  selector: 'app-root',
  imports: [ToDoListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
}
