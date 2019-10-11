import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
 take:BigInteger;
  users: User[];
  //mentor:Mentor[];
  constructor(private router: Router, private userService: UserService) {

  }
  updateUser(user:User):void{
    this.userService.updateUser(user).subscribe(data => {
      alert(user.active);
    })
  };
  ngOnInit() {
    this.userService.activeData()
      .subscribe( data => {
        this.users = data;
      });
  };
  getMentor(mentor:Mentor): void {
      this.userService.getMentor(mentor)
    .subscribe( data => {
      if(data.length)
      {
          if(data[0].mentorId == this.take )
          {
            alert('permission granted');
          
          }
          else
          {
            alert('revord not exist');
          }
    }
    else{
      alert('Please enter mentor id');
    }
    });
    
      

};

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


