import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Trainings } from '../models/trainings.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainingsService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8899/trainings';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Trainings[]>(this.userUrl); 
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Trainings>(this.userUrl, user);
  }
  public getMentors(mentor)
  {
    return this.http.get<Trainings[]>(this.userUrl+"/findByMentorId/"+mentor.mentorId);
  }
  public getTechnologies(technologies)
  {
    return this.http.get<Trainings[]>(this.userUrl+"/findByTechnologies/"+technologies.id);
  }
  public insertTrainingUser(training)
  {
    return this.http.get<Trainings[]>(this.userUrl+"/findByTrainingIdAndUserId/"+training.id+"/"+localStorage.getItem('TokenId'));
  }
}
