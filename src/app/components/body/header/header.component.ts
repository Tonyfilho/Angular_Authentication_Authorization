import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  authService = inject(AuthService);


  logout() {
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
 

}
