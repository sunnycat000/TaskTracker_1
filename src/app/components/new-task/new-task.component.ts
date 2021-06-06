import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  text: string = '';
  time: string = '';
  reminder: boolean = false;
  showAddTask: boolean;
  @Output() newTask: EventEmitter<Task> = new EventEmitter();
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  onSubmit() {
    if (!this.text) {
      alert('Please enter a task');
      return;
    }
    const task = {
      text: this.text,
      time: this.time,
      reminder: this.reminder,
    };
    this.newTask.emit(task);
    this.text = '';
    this.time = '';
    this.reminder = false;
  }
}
