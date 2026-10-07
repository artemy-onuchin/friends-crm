import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { HeaderComponent } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  imports: [FooterComponent, HeaderComponent, RouterOutlet, SidebarComponent],
  selector: 'frnd-workspace-layout',
  styleUrl: './workspace-layout.scss',
  templateUrl: './workspace-layout.html',
})
export class WorkspaceLayout {}
