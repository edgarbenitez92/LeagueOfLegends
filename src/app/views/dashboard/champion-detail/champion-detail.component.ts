import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionsService } from 'src/app/core/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss'],
})
export class ChampionDetailComponent implements OnInit {
  champion!: Champion;
  version: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private championService: ChampionsService
  ) {}

  ngOnInit(): void {
    this.version = this.checkCurrentVersion();

    this.activatedRoute.params.subscribe(({ id }) => {
      this.getChampionDetails(id);
    });
  }

  getChampionDetails(id: string) {
    return this.championService.getChampionById(id).subscribe({
      next: ({ data }) => {
        for (let championName in data) {
          this.champion = data[championName];
        }
        console.log('responde: ', this.champion);
      },
      // error: (error) => {
      // this.spinner.hide();
      // this.notifyService.showHTMLErrorMessage(error.name, error.message, GLOBALS.TOASTER.TITLE_ERROR);
      // },
      // complete: () => this.spinner.hide()
    });
  }

  checkCurrentVersion(): string {
    let lastVersion!: string;
    this.championService
      .getLeagueOfLegendsVersions()
      .subscribe((versions) => (lastVersion = versions[0]));
    return lastVersion;
  }

  goBack() {}
}
