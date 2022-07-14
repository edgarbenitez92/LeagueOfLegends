import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private championService: ChampionsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.checkCurrentVersion();
    console.log('version: ', this.version);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.getChampionDetailsById(id);
    });
  }

  getChampionDetailsById(id: string) {
    this.spinner.show();

    return this.championService.getChampionById(id).subscribe({
      next: ({ data }) => {
        for (let championName in data) {
          this.champion = data[championName];
        }
      },
      error: (error) => {
        this.spinner.hide();
      },
      complete: () => this.spinner.hide(),
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
