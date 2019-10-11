import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from '../models/skill.model';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: []
})
export class SkillComponent implements OnInit {

  users: Skill[];

  constructor(private router: Router, private skillService: SkillService) {

  }

  ngOnInit() {
    this.skillService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: Skill): void {
    this.skillService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


