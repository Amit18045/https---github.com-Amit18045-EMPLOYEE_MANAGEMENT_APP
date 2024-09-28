import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  routersrc = inject(Router);

  loginObj: any = {
    username: '',
    password: ''
  };


  onLogin() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == '1234') {
      this.routersrc.navigateByUrl("dashboard");
    } else {
      alert("wrong credentails");
    }
  }
}
