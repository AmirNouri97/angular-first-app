import { FormsModule, NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { App } from "./app";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { CommonModule, DatePipe } from "@angular/common";
import { Card } from "./shared/card/card";
import { TaskComponent } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { sharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations:[App,HeaderComponent,UserComponent],
    bootstrap:[App],
    imports:[BrowserModule ,CommonModule,FormsModule,sharedModule,TasksModule]
})

export class AppModule {

}