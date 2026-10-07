import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'frnd-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class HomePageComponent {
  private router = inject(Router);

  NavigateToDashboard(): void {
    setTimeout(() => {
      void this.router.navigate(['/dashboard']);
    }, 1000);
  }

  NavigateToRegistration(): void {
    void this.router.navigate(['/register']);
  }
}
