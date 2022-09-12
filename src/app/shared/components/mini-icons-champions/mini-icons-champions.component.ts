import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../../interfaces/champions.interface';

@Component({
  selector: 'app-mini-icons-champions',
  templateUrl: './mini-icons-champions.component.html',
  styleUrls: ['./mini-icons-champions.component.scss'],
})
export class MiniIconsChampionsComponent {
  @Input() champion!: Champion;

  constructor(private route: Router) {}

  goToChampionDetails(championName: string) {
    this.route.navigate([`dashboard/champion/${championName}`]);
  }
}
