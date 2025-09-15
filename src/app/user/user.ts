import { Component , computed, EventEmitter, Input,input ,output,Output,signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'
import { User } from './user.model';
const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
//make interface



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
//  selectedUser = signal(DUMMY_USERS[randomIndex])
// imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)

//input decorator

// @Input({required:true}) id! : string;
// @Input({required:true}) avatar! : string;
// @Input({required:true}) name!: string;
@Input({required:true}) user! : User
//or
// {
//   id:string , avatar:string,name:string
// }
@Output() select = new EventEmitter()

  get imagePath (){
  return 'assets/users/' + this.user.avatar
 }  

 onSelectedUser(){
  this.select.emit(this.user.id)
 }

//signal way
// avatar = input.required<string>()
// name = input.required<string>()
// select = output<string>()
// imagePath = computed(()=>'assets/users/' + this.avatar())


//  onSelectedUser(){
//   // const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
//   // this.selectedUser.set(DUMMY_USERS[randomIndex]) 
//  }
}
