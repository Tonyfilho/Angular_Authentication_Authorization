import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './components/auth.service';
import { FooterComponent } from "./components/body/footer/footer.component";
import { HeaderComponent } from "./components/body/header/header.component";
import { MainComponent } from "./components/body/main/main.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  
  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next: res => {this.authService.currentUserSig.set(res['user']), console.error(res.user)},
      error: e => {this.authService.currentUserSig.set(null), console.error(e)},
      complete: () => {}
    });
  }
  
}
