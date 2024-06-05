import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onLogin = ()=>{
    this.authService.UserLogin(this.loginForm.value as User).subscribe(
      data=>{
         console.log(data);
         localStorage.setItem('user',data.accessToken)
          alert('Đăng nhập thành công')
          this.router.navigate(['admin']);
      }
      ,error=>{
          // console.log(error);
          alert(error.error)
      }
    )
  }
  CheckUser =()=>{
     console.log(this.authService.CheckUserValid())
  }
}
