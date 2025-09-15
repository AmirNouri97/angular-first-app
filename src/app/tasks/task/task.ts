import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
@Input ({required:true}) task !: Task
@Output() complete = new EventEmitter<string>()

onCompleteTask(){
  this.complete.emit(this.task.id)
}

}
