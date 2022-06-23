import { Component, Input, OnInit } from '@angular/core';
import { ChampionsService } from 'src/app/core/champions/champions.service';

@Component({
  selector: 'app-mini-icons-champions',
  templateUrl: './mini-icons-champions.component.html',
  styleUrls: ['./mini-icons-champions.component.scss']
})
export class MiniIconsChampionsComponent {

  urlImgMini: string = '';

  loading: boolean = false;

  @Input() champion!: any;

  constructor(private championsService: ChampionsService) {
  }

  ngOnInit(): void {
    this.championsService.getLeagueOfLegendsVersions().subscribe((versions) => {
      let version = versions[0];

      this.urlImgMini = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${this.champion.id}.png`;
      this.loading = true;
    });
  }
}
