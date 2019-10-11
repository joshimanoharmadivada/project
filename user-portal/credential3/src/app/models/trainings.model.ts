import { Technologies } from './technologies.model';
import { Mentor } from './mentor.model';
// import { User } from './user.model';

export class Trainings {

  id: BigInteger;
  status: string;
  progress: number;
  commissionAmount:number;
  rating:number=0.0;
  startDate:string;
  endDate:string;
  startTime:string;
  endTime:string;
  amountReceived:number;
   fees:number;
  mentor:Mentor;
  // user:User;
  technologies:Technologies;
}
