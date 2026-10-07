import { Component, inject } from '@angular/core';
import { SidebarNavigation } from '../../components/navigation/main-menu/sidebar-navigation';
import { Router } from '@angular/router';

@Component({
  imports: [SidebarNavigation],
  selector: 'frnd-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  private router = inject(Router);

  logout(): void {
    setTimeout(() => {
      void this.router.navigate(['/']);
    }, 1000);
  }
}
