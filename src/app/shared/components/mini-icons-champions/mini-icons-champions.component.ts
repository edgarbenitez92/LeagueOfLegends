import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../../interfaces/champions.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-mini-icons-champions',
    templateUrl: './mini-icons-champions.component.html',
    styleUrls: ['./mini-icons-champions.component.scss'],
    standalone: true,
    imports: [TitleCasePipe],
})
export class MiniIconsChampionsComponent {
  @Input() champion!: Champion;

  constructor(private route: Router) {}

  goToChampionDetails(championName: string) {
    this.route.navigate([`dashboard/champion/${championName}`]);
  }
}
