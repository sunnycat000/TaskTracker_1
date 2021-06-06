import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((value) => {
      this.tasks = value;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((value) => {
      this.tasks.push(value);
    });
  }

  onDelete(task: Task) {
    this.taskService.deleteTask(task).subscribe((value) => {
      this.tasks.filter((t) => t.id !== task.id);
    });
  }

  onEdit(task: Task, index: number) {
    this.taskService.updateTask(task).subscribe((value) => {
      this.tasks.splice(index, 1, task);
    });
  }
}
