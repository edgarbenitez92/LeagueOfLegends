import { Component, Input } from '@angular/core';
import { Champion } from '../../interfaces/champions.interface';

@Component({
  selector: 'app-mini-icons-champions',
  templateUrl: './mini-icons-champions.component.html',
  styleUrls: ['./mini-icons-champions.component.scss'],
})
export class MiniIconsChampionsComponent {
  @Input() champion!: Champion;

  constructor() { }
}
