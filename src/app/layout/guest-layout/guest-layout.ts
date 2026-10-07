import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'frnd-guest-layout',
  styleUrl: './guest-layout.scss',
  templateUrl: './guest-layout.html',
})
export class GuestLayout {}
