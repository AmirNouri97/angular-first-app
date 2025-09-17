import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { TaskComponent } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { sharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[Tasks,TaskComponent,NewTask],
    exports:[Tasks],
    imports:[sharedModule,CommonModule,FormsModule]
})
export class TasksModule{

}