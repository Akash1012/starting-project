import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({
    required: true
  }) task!: Task
  @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TaskService)

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.onCompleteTask(this.task.id);
  }
}
