import { Component, Input, OnInit } from '@angular/core';
import { ChampionsService } from 'src/app/core/champions/champions.service';

@Component({
  selector: 'app-mini-icons-champions',
  templateUrl: './mini-icons-champions.component.html',
  styleUrls: ['./mini-icons-champions.component.scss'],
})
export class MiniIconsChampionsComponent {
  @Input() champion!: any;

  constructor() {}

  ngOnInit(): void {}
}
