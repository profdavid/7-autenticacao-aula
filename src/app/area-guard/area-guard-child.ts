import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-guard-child',
  imports: [],
  templateUrl: './area-guard-child.html',
  styleUrl: './area-guard-child.css',
})
export class AreaGuardChild {
  private readonly route = inject(ActivatedRoute);

  readonly titulo = this.route.snapshot.data['titulo'] as string;
}
