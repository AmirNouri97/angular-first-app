import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  enteredTitle = ''
  enteredSummery = ''
  enteredDate = ''

  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  
  onCancel(){
    this.cancel.emit()
  }
  onSubmit(){
this.add.emit({
  title:this.enteredTitle,
  summery:this.enteredSummery,
  date:this.enteredDate
})
  }
}
