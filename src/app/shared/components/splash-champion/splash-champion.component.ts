import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../../interfaces/champions.interface';

@Component({
  selector: 'app-splash-champion',
  templateUrl: './splash-champion.component.html',
  styleUrls: ['./splash-champion.component.scss'],
})
export class SplashChampionComponent implements OnInit {
  @Input() champion!: Champion;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToChampionDetails(championName: string) {
    this.route.navigate([`dashboard/champion/${championName}`]);
  }
}
