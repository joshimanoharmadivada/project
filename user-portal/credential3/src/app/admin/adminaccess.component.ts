import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userLogin',
  templateUrl: './adminaccess.component.html',
  styles: []
})
export class AdminAccessComponent {
  // private router1:Router;
  constructor(private router: Router) {
    // router.navigate(['/users'])
  }
  usr:string=null;
  pwd:string=null;
  validate():void{
    if(this.usr == 'admin' && this.pwd == 'admin')
    {
      this.router.navigate(['/admin']);
    }
    else if(this.usr == null && this.pwd == null)
    {
      alert("Please enter the credentials...");
      this.router.navigate(['/adminlogin']);
    }
    else{
      alert("Enter as Username: admin, Password: admin..");
      this.router.navigate(['/adminlogin']);
    }
  }

}


