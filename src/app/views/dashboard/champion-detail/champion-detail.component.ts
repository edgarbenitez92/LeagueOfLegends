import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions.interface';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { SwiperConfigModel } from 'src/app/shared/custom/custom-swiper-config';
import { Baron } from 'src/app/shared/mocks/baron.mock';
import { Meta } from '@angular/platform-browser';
import { AppSettingsService } from '../../../core/services/app-settings/app-settings.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { SwiperModule } from 'swiper/angular';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
    selector: 'app-champion-detail',
    templateUrl: './champion-detail.component.html',
    styleUrls: ['./champion-detail.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        SwiperModule,
        NgFor,
        MatLegacyButtonModule,
        MatLegacyTooltipModule,
        MatIconModule,
        MatDividerModule,
        TitleCasePipe,
        TranslateModule,
    ],
})
export class ChampionDetailComponent implements OnInit {
  champion!: Champion;
  version: string = '';
  swiperConfig = SwiperConfigModel;
  id!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private championService: ChampionsService,
    private spinner: NgxSpinnerService,
    private metaService: Meta,
    private appSettingsService: AppSettingsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
      this.getChampionDetailsById(id);
    });

    this.appSettingsService.hasNewLanguage$.subscribe(() => this.getChampionDetailsById(this.id));
  }

  getChampionDetailsById(id: string) {
    this.spinner.show();

    this.championService.getChampionById(id).subscribe({
      next: ({ data, version }) => {
        this.version = version;
        for (let championName in data) this.champion = data[championName];
        this.updateMetaTags(this.champion);
      },
      error: (error) => {
        this.spinner.hide();
        this.champion = Baron;
      },
      complete: () => this.spinner.hide(),
    });
  }

  goHome() {
    this.router.navigate(['/dashboard/home']);
    this.updateMetaTags(this.champion, true);
  }

  imageNotFound({ target }: any) {
    target.src = './assets/images/errorImageSpell.jpg';
  }

  updateMetaTags(champion: Champion, isGoingHome: boolean = false) {
    if (isGoingHome) {
      this.metaService.updateTag({ property: 'og:title', content: 'League of Legends | Angular' });

      this.metaService.updateTag({
        property: 'og:image',
        content: 'https://league-of-legends-app.netlify.app/og-image.jpg',
      });

      this.metaService.updateTag({
        property: 'og:url',
        content: 'https://league-of-legends-app.netlify.app/dashboard/home',
      });
    } else {
      let { name, title, id } = champion;

      this.metaService.updateTag({
        property: 'og:title',
        content: name + ' ' + title + ' ' + '| League of Legends',
      });

      this.metaService.updateTag({
        property: 'og:image',
        content: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`,
      });

      this.metaService.updateTag({
        property: 'og:url',
        content: `https://league-of-legends-app.netlify.app/dashboard/champion/${id}`,
      });
    }
  }
}
