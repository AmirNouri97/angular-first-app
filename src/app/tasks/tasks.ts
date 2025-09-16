import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone:false
})
export class Tasks {
  @Input({required:true}) name?: string ;
  @Input({required:true}) userId!:string;
  isAddingTask = false;

  // private tasksService=new TaskService()
  constructor(private tasksService: TaskService){}

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId)
}

// onCompleteTask(id: string){
// this.tasksService.removeTask(id)
// }

onStartAddTask(){
this.isAddingTask =true;
}
onCloseAddTask(){
  this.isAddingTask =false;
}
// onCancelAddTask(){
//   this.isAddingTask =false;
// }
//اینو دیگه لازم نداریم
// onAddTask(taskData:NewTaskData){
//   this.tasksService.addTask(taskData,this.userId)
//    this.isAddingTask =false;
// }
}
