import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './components/auth.service';
import { FooterComponent } from "./components/body/footer/footer.component";
import { HeaderComponent } from "./components/body/header/header.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  
  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next: res => {this.authService.currentUserSig.set(res.user)},
      error: e => {},
      complete: () => {}
    });
  }
  
}
