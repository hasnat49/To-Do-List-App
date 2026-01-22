import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [FormsModule],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
  task = "";
  taskList: { id: number, name: string }[] = []

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, name: this.task })
    this.task = "";
  }


  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id)
  }
}
