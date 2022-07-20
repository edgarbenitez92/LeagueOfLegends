import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChampionsService } from 'src/app/core/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { SwiperConfigModel } from 'src/app/shared/custom/custom-swiper-config';
import { Baron } from 'src/app/shared/mocks/baron.mock';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private championService: ChampionsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.getChampionDetailsById(id);
    });
  }

  getChampionDetailsById(id: string) {
    this.spinner.show();

    return this.championService.getChampionById(id).subscribe({
      next: ({ data, version }) => {
        this.version = version;
        for (let championName in data) this.champion = data[championName];
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
  }

  imageNotFound({ target }: any) {
    target.src = './assets/images/errorImageSpell.jpg';
  }
}
