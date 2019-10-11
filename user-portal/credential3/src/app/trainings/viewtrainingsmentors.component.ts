import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainings } from '../models/trainings.model';
import { TrainingsService } from './trainings.service';
import { Mentor } from '../models/mentor.model';
import { MentorService } from '../mentor/mentor.service';

@Component({
  selector: 'app-viewtrainingsmentors',
  templateUrl: './viewtrainingsmentors.component.html',
  styles: []
})
export class ViewTrainingsMentorsComponent implements OnInit {

  trainings: Trainings[];
  mentors:Mentor[];
  constructor(private router: Router, private trainingsService: TrainingsService,private mentorService: MentorService) {

  }
  viewDetails(mentor:Mentor):void{
    this.mentorService.getRecord(mentor).subscribe(data1 =>{
      this.mentors = this.mentors.filter(m=>m!=mentor);
    })
  };
  ngOnInit() {
    this.trainingsService.getUsers()
      .subscribe( data => {
        this.trainings = data;
      });
  };

  deleteUser(user: Trainings): void {
    this.trainingsService.deleteUser(user)
      .subscribe( data => {
        this.trainings = this.trainings.filter(u => u !== user);
      })
  };

}


