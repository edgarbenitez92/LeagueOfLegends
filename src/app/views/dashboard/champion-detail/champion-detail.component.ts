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
    this.checkCurrentVersion();
    console.log('version: ', this.version);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.getChampionDetails(id);
    });

    setTimeout(() => {
      console.log('version timeout: ', this.version);
    }, 1000);
  }

  getChampionDetails(id: string) {
    return this.championService.getChampionById(id).subscribe({
      next: ({ data }) => {
        for (let championName in data) {
          this.champion = data[championName];
        }
      },
      // error: (error) => {
      // this.spinner.hide();
      // this.notifyService.showHTMLErrorMessage(error.name, error.message, GLOBALS.TOASTER.TITLE_ERROR);
      // },
      // complete: () => this.spinner.hide()
    });
  }

  checkCurrentVersion() {
    this.championService.getLeagueOfLegendsVersions().subscribe({
      next: (versions) => {
        this.version = versions[0];
      },
    });
  }

  goHome() {
    this.router.navigate(['/dashboard/home']);
  }

  imageNotFound({ target }: any) {
    target.src = './assets/images/errorImageSpell.jpg';
  }
}
