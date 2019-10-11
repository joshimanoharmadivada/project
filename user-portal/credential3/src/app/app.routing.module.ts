import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { AddMentorComponent } from './mentor/add-mentor.component';
import { MentorComponent } from './mentor/mentor.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PaymentComponent } from './payment/payment.component';
import { AddSkillComponent } from './skill/add-skill.component';
import {  SkillComponent } from './skill/skill.component';
import { AddTechnologiesComponent } from './technologies/add-technologies.component';
import { AddTrainingsComponent } from './trainings/add-trainings.component';
import { AddPaymentComponent } from './payment/add-payment.component';
import { UserLoginComponent } from './user/userlogin.component';
import { MentorLoginComponent } from './mentor/mentorlogin.component';
import { AdminLoginComponent } from './admin/adminlogin.component';
import { MentorAdminComponent } from './mentor/mentoradmin.component';
import { HomeUserComponent } from './user/homeuser.component';

import { AdminAccessComponent } from './admin/adminaccess.component';
import { UserAdminComponent } from './user/useradmin.component';
import { IndexComponent } from './index.component';
import { MentorSearchComponent } from './mentor/mentorsearch.component';



const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'users', component: UserComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'mentor', component: MentorComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'addtrainings', component: AddTrainingsComponent },
  { path: 'addtechnologies', component: AddTechnologiesComponent },
  { path: 'userlogin', component: UserLoginComponent},
  { path: 'mentorlogin', component: MentorLoginComponent},
  { path: 'admin', component: AdminLoginComponent},
  { path: 'mentoradmin', component: MentorAdminComponent},
  { path: 'homeuser', component: HomeUserComponent},
  { path: 'adminlogin', component: AdminAccessComponent},
  { path: 'useradmin', component: UserAdminComponent},
  { path: 'mentorsearch', component:MentorSearchComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
