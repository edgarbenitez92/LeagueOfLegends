import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs';
import { ChampionsService } from 'src/app/core/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions';

@Component({
    selector: 'app-champions-list',
    templateUrl: './champions-list.component.html',
    styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit {

    champions: Champion[] = [];

    constructor(private championsService: ChampionsService) { }

    ngOnInit(): void {

      this.championsService.getChampions().pipe(
        pluck('data'),
        map(data => {
          let championsCards: any[] = [];
          let championsArr: any = Object.values(data);
          for (let champion of championsArr) {
            const name = champion.name;
            const image = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
            const id = champion.id;
            const difficulty = champion.info.difficulty;
            const roles = champion.tags;
            championsCards.push({ name, image, id, difficulty, roles });
          }
          return championsCards;
        }
        )
      )
        .subscribe((champions: any) => this.champions = champions);
    }

}
