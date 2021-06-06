import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() editTask: EventEmitter<Task> = new EventEmitter();
  isEditing: boolean = false;
  editedText: string = '';
  editedTime: string = '';
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.deleteTask.emit(task);
  }

  onEdit(task: Task) {
    this.isEditing = true;
  }
  finishEditing(task: Task) {
    this.editTask.emit(task);
    this.isEditing = false;
  }
}
