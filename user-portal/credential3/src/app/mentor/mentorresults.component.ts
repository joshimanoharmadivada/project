import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorService } from './mentor.service';
import { NgForOf } from '@angular/common';
import { MentorSearchComponent } from './mentorsearch.component';

@Component({
  selector: 'app-mentorresults',
  templateUrl: './mentorresults.component.html',
  styles: []
})
export class MentorResultsComponent implements OnInit {

   editField:ConstantSourceNode;
   
   item : Array<Mentor>;
  users: Mentor[];
  mentorsearching:MentorSearchComponent;
  users1:Mentor[] = this.mentorsearching.returnByUserName();
  data1: Mentor[];
  user: Mentor = new Mentor();

  constructor(private router: Router, private mentorService: MentorService) {

  }
  // updateList(mentorId: number, property: string, event: any) {
  //    this.editField = event.target.textContent;
  //   this.users[mentorId][property] = this.editField;
  // }

  updateUser(user):void{
    this.mentorService.updateUser(user).subscribe(data => {
      alert(user.active);
    })
  }

  changeValue(mentorId: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  ngOnInit() {
    this.mentorService.activeData()
      .subscribe( data => {
        // alert(data[0].active)
        // if(data[1].active == true)
        this.users = data;
        
        
      });
  };

  deleteUser(user: Mentor): void {
    this.mentorService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


