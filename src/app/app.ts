import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS
  selectedUserId='u1'
  user!:any;//todo
  // user!:{name!:string,avatar!:string,id!:string};//todo
  protected readonly title = signal('first-angular-app');
  @Output() targetUser = new EventEmitter()

get selectedUser(){
return this.users.find((user)=>user.id === this.selectedUserId)
}

  onSelectUser(id:string){
    console.log(id);
    this.selectedUserId = id
    // this.user = DUMMY_USERS.find(user=>user.id === id)
    
  }


}
