import { Component, HostBinding  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class FrontpageComponent {
  @HostBinding('@fadeIn') fadeIn = true;
}
