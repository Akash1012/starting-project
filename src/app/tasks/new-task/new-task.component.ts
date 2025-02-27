import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private taskService = inject(TaskService)

  // constructor(private taskService: TaskService) { }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if (!this.enteredTitle || !this.enteredSummary || !this.enteredDate) {
      return;
    }

    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
    this.close.emit();
  }

}
