import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
  loginForm!: FormGroup;

  constructor( private user: AccountService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user_email: new FormControl('', Validators.required),
      user_psw: new FormControl('', Validators.required),
    });
  }

  login(obj: any): void {
    this.user.onLogin(obj).subscribe((res: any) => {
      // Handle the login response
      console.log(res);
      localStorage.setItem('token', res.token);
    });
  }

  onSubmit(): void {
    const data = this.loginForm.value;
    const obj: any = {
      email: data.user_email,
      name: data.user_psw,
    };
    this.login(obj);
  }
}
