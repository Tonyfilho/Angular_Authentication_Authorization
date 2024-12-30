import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { IUserRegistration } from '../../../share/shareInterfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


   fb = inject(FormBuilder);
   authService = inject(AuthService);
   route = inject(Router);
   
  
    registerForm = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  
  
    onSubmit(): void {
      console.log('Login : ', this.registerForm.getRawValue());
      const oneRegister: IUserRegistration=  this.registerForm.getRawValue();
      this.authService.register(oneRegister).subscribe({
        next: res => { console.log(res), this.route.navigateByUrl('/information')},
        error: e => {console.error(e)},
        complete: () => {}
      });

    }
  
}
