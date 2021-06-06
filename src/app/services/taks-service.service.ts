import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaksServiceService {
  apiUrl: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTask(task: Task): Observable<Task> {
    return this.http.get<Task>(`${this.http}/${task.id}`);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.http}/${task.id}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.http}/${task.id}`, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl, task);
  }
}
