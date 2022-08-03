import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions.interface';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { SwiperConfigModel } from 'src/app/shared/custom/custom-swiper-config';
import { Baron } from 'src/app/shared/mocks/baron.mock';
import { Meta } from '@angular/platform-browser';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss'],
})
export class ChampionDetailComponent implements OnInit {
  champion!: Champion;
  version: string = '';
  swiperConfig = SwiperConfigModel;
  currentChampionId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private championService: ChampionsService,
    private spinner: NgxSpinnerService,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.getChampionDetailsById(id);
      this.currentChampionId = id;
    });
  }

  getChampionDetailsById(id: string) {
    this.spinner.show();

    return this.championService.getChampionById(id).subscribe({
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
      this.metaService.updateTag({ property: 'og:title', content: 'LeagueOfLegends | Angular' });

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
        content: name + ' ' + title + ' ' + '| LeagueOfLegends',
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
