import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { IUserLogin } from '../../../share/shareInterfaces';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './../register/register.component.css',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
   // console.log('Login : ', this.loginForm.getRawValue());
   const localUser: IUserLogin = {user: this.loginForm.getRawValue()};
   this.authService.login(localUser).subscribe({
    next: res => {console.log(res), this.router.navigateByUrl('/information')},
    error: e => {console.error(e)},
    complete: () => { },
    
   });

  }
}
