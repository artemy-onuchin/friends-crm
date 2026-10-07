import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarNavigationItem } from './sidebar-navigation.types';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'frnd-sidebar-navigation',
  styleUrl: './sidebar-navigation.scss',
  templateUrl: './sidebar-navigation.html',
})
export class SidebarNavigation {
  public ItemList: SidebarNavigationItem[] = [
    {
      id: 1,
      alias: '/dashboard',
      title: 'Dashboard',
    },
    {
      id: 2,
      alias: '/people',
      title: 'People',
    },
    {
      id: 3,
      alias: '/relationships',
      title: 'Relationships',
    },
    {
      id: 4,
      alias: '/interactions',
      title: 'Interactions',
    },
    {
      id: 5,
      alias: '/debts',
      title: 'Debts',
    },
    {
      id: 6,
      alias: '/dates',
      title: 'Dates',
    },
    {
      id: 7,
      alias: '/settings',
      title: 'Settings',
    },
  ];
}
