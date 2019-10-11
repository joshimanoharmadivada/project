import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';
// import { userInfo } from 'os';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorService {

  constructor(private http:HttpClient) {}

  private mentorUrl = 'http://localhost:8899/mentor';
  //private userUrl = '/api';

  public activeData()
  {
    return this.http.get<Mentor[]>(this.mentorUrl+"/active/true");
  }
 public getRecord(mentor)
 {
   return this.http.get<Mentor[]>(this.mentorUrl+"/"+mentor.mentorId);
 }
  public getByMentor(username)
  {
    return this.http.get<Mentor[]>(this.mentorUrl+"/Username/"+username);
  }
  public updateUser(mentor){
    return this.http.put<Mentor[]>(this.mentorUrl+"/update/"+mentor.mentorId,mentor);
  }

  public searchMentor(mentor){
    return this.http.get<Mentor[]>(this.mentorUrl+"/"+ mentor.userName+"/"+mentor.password);
  }

  public getUsers() {
    return this.http.get<Mentor[]>(this.mentorUrl); 
  }

  public deleteUser(user) {
    return this.http.delete(this.mentorUrl + "/"+ user.mentorId);
  }
 

  public createUser(user) {
    return this.http.post<Mentor>(this.mentorUrl, user);
  }

}
