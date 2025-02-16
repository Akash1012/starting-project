import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({
    required: true
  }) name?: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  // private tasksService = new TaskService();

  constructor(private tasksService: TaskService) { // Dependency injection
    // this.tasksService = tasksService;
  }



  onCompleteTask(taskId: string) {
    console.log(`Task ${taskId} completed`);
    this.tasksService.onCompleteTask(taskId);
    // this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    console.log('Start adding task');
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}
