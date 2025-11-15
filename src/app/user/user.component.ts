import { Component,computed,EventEmitter,input,Input,output,Output,signal } from '@angular/core';
import { DUMMY_USERS } from '../DUMMY_USERS';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: false,

  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  @Input ({required:true}) user! :User;
  @Input ({required:true}) selected!:boolean;
  @Output() select=new EventEmitter<string>();

  get imagePath() { 
    
   return 'assets/users/'+ this.user.avatar;
  }

 onSelectUser(){
   this.select.emit(this.user.id);
   }
   /*avatar = input.required<string>();
   name = input.required<string>();
   imagePath = computed(
    ()=>
      {
      return 'assets/users/'+ this.avatar()
  });*/
}

































//{ 28 }//
/*export class UserComponent {
  const randomIndex=Math.floor(Math.random()* DUMMY_USERS.length);
   //selectedUser= DUMMY_USERS[randomIndex];
   selectedUser= signal(DUMMY_USERS[randomIndex]);
   imagePath=computed(()=>this.ImagePath());
   ImagePath() { 
   return 'assets/users/'+ this.selectedUser().avatar;
   }
   //get imagePath() { 
   //return 'assets/users/'+ this.selectedUser().avatar;
  // }

   onSelectUser(){
    const randomIndex=Math.floor(Math.random()* DUMMY_USERS.length);

    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser=DUMMY_USERS[randomIndex];
   }
}*/
