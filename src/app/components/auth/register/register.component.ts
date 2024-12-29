import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


   fb = inject(FormBuilder);
  
    registerForm = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  
  
    onSubmit(): void {
      console.log('Login : ', this.registerForm.getRawValue());
    }
  
}
