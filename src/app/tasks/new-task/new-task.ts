import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone:false
})
export class NewTask {

  enteredTitle = ''
  enteredSummery = ''
  enteredDate = ''

  private tasksService = inject(TaskService)
@Input({required:true}) userId !:string;
  // @Output() cancel = new EventEmitter<void>()
  @Output() close = new EventEmitter<void>()
  // @Output() add = new EventEmitter<NewTaskData>()
  
  // onCancel(){
  //   this.cancel.emit()
  // }
  onCancel(){
    this.close.emit()
  }
//   onSubmit(){
// this.add.emit({
//   title:this.enteredTitle,
//   summery:this.enteredSummery,
//   date:this.enteredDate
// })
//   }
// }
  onSubmit(){
this.tasksService.addTask({
  title:this.enteredTitle,
  summery:this.enteredSummery,
  date:this.enteredDate
},this.userId)
this.close.emit()
  }
}