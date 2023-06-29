import { Component } from '@angular/core';
import { User } from '../user';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: User = new User();

  constructor(private loginuserservice: LoginuserService, private router: Router) { }

  userLogin() {
    console.log(this.user);
    if(this.user.password=="admin" && this.user.userId=="admin"){
      this.goToEmployeeList();
    }
    else{
      alert("sorry please enter correct userId and password");
    }
    // this.loginuserservice.loginUser(this.user).subscribe(data => {
    //   this.goToEmployeeList();
    // }, error => alert("sorry please enter correct userId and password"));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
