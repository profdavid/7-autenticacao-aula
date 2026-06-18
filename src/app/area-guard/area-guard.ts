import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-area-guard',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './area-guard.html',
  styleUrl: './area-guard.css',
})
export class AreaGuard {}
