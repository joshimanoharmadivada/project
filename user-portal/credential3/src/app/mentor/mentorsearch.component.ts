import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mentor } from '../models/mentor.model';
import { MentorService } from './mentor.service';
import { TechnologiesService } from '../technologies/technologies.service';
import { Technologies } from '../models/technologies.model';
import { Trainings } from '../models/trainings.model';
import { TrainingsService } from '../trainings/trainings.service';


@Component({
  selector: 'app-mentorsearch1',
  templateUrl: './mentorsearch.component.html',
  styles: ['./mentor.component.css']
})
export class MentorSearchComponent implements OnInit {
   editField:ConstantSourceNode;
   private act:string = null;
   private i:number=0;
   item : Array<Mentor>;
  mentors: Mentor[];
  mentors1: Mentor[];
  data1: Mentor[];
  mentorsearchtrue:boolean=false;
  technologiestrue:boolean=false;
  user: Mentor = new Mentor();
  technologies: Technologies[];
  technologies1: Technologies[];
  data2:Technologies[];
  trainings:Trainings[];
  selectedOption:string = this.user.userName;
  selectedOption1:string = this.user.userName;
  trainingDetails:boolean=false;
  technologiesDetails:boolean = false;
  constructor(private router: Router,private http: HttpClient,private trainingService:TrainingsService, private mentorService: MentorService,private technologiesService:TechnologiesService) {

  }
  subscribe1(mentor):void{
    var value = confirm("Do u want to subscibe?");
    alert(value);
    if(value == true)
    {
      this.trainingService.getMentors(mentor).subscribe(data1=>{
        this.trainings = data1;
        // alert(this.trainings[0].endTime)
        this.trainingDetails = true;
        this.technologiesDetails=false;
        this.technologiestrue=false;
        this.mentorsearchtrue=false;
      })
    }
  }
view(training):void{
 this.trainingService.insertTrainingUser(training).subscribe(data => {
  alert("Entered into view"); 
})
}
  subscribe2(technologies):void{
    var value1 = confirm("Do u want to subscribe?");
    alert(value1);
    if(value1 == true)
    {
      this.trainingService.getTechnologies(technologies).subscribe(data2=>
        {
          this.trainings = data2;
          this.technologiesDetails = true;
          this.technologiestrue=false;
          this.mentorsearchtrue=false;
          this.trainingDetails=false;
        })
    }
  }
  
  // updateList(mentorId: number, property: string, event: any) {
  //    this.editField = event.target.textContent;
  //   this.users[mentorId][property] = this.editField;
  // }
 
  subscribe():void{
    var mail = prompt("Please enter your Email Id...");
    if(mail == null || mail == "")
    {
     
    }
    else{
      this.http.post('/sendemail', mail);
      alert("Thanks for subscribing.");
    }
    
  }

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
      .subscribe( data1 => {
        // alert(data[0].active)
        // if(data[1].active == true)
        this.mentors = data1; 
        // alert(data);      
      });
      this.technologiesService.getUsers()
      .subscribe(data1 => {
      this.technologies = data1;
      // alert(data1);
    });   
  };
  getByUserName():void{
    this.mentorService.getByMentor(this.selectedOption)
    .subscribe(data => {
      if(data.length != 0)
      {
        
        this.mentorsearchtrue = true;
        this.technologiestrue=false;
        this.technologiesDetails=false;
        this.trainingDetails=false;
        this.mentors1=data;
        //alert(this.users1[0].password);
      }
      else{
        alert(this.selectedOption);
      }
    });     
  }
  returnByUserName():Mentor[]{
    alert(this.user.mentorId);
    return this.mentors1;
  }
  getByTechnologies():void{
    this.technologiesService.getByTechnologies(this.selectedOption1)
    .subscribe(data => {
      if(data.length != 0)
      {
      this.technologiestrue = true;
      this.technologies1 = data;
      this.trainingDetails=false;
      this.technologiesDetails=false;
      this.mentorsearchtrue=false;
      //alert(this.technologies1[0].id);
      }
      else{
        alert('Select an option');
      }
    });

  }
  deleteUser(user: Mentor): void {
    this.mentorService.deleteUser(user)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== user);
      })
  };

}


