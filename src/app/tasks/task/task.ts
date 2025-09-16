import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { type Task } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone:false
})
export class TaskComponent {
@Input ({required:true}) task !: Task
@Output() complete = new EventEmitter<string>()
private tasksService = inject(TaskService)
onCompleteTask(){
  // this.complete.emit(this.task.id)
  this.tasksService.removeTask(this.task.id)
}

}
