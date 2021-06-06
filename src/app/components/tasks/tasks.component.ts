import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../TASKS';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((value) => {
      this.tasks.push(value);
    });
  }
}
