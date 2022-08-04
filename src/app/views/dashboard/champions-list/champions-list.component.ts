import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, pluck } from 'rxjs';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss'],
})
export class ChampionsListComponent implements OnInit {
  champions: Champion[] = [];
  typeImage: string = 'splash';

  isInitView: boolean;

  constructor(private championsService: ChampionsService, private spinner: NgxSpinnerService) {
    this.isInitView = true;
  }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions() {
    this.spinner.show();

    this.championsService
      .getChampions()
      .pipe(
        pluck('data'),
        map((data) => {
          let championsCards: any[] = [];
          let championsArr: any = Object.values(data);
          for (let champion of championsArr) {
            const name = champion.name;
            const image = `${environment.apiBaseUrl}/img/champion/loading/${champion.id}_0.jpg`;
            const id = champion.id;
            const difficulty = champion.info.difficulty;
            const roles = champion.tags;
            const miniImage = `${environment.apiBaseUrl}/${champion.version}/img/champion/${champion.id}.png`;
            championsCards.push({ name, image, miniImage, id, difficulty, roles });
          }
          return championsCards;
        })
      )
      .subscribe({
        next: (champions: any) => (this.champions = champions),
        error: (error) => {
          this.spinner.hide();
        },
        complete: () => this.spinner.hide(),
      });
  }

  onSelectTypeView({ source: { checked } }: MatButtonToggleChange) {
    this.isInitView = !this.isInitView;
  }
}
