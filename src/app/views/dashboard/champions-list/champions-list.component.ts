import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { SnackBarStatesEnum } from 'src/app/shared/enums/snack-bar-states.enum';
import { Champion } from 'src/app/shared/interfaces/champions.interface';
import { SnackBarService } from '../../../core/services/snack-bar/snack-bar.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss'],
})
export class ChampionsListComponent implements OnInit {
  champions: Champion[] = [];
  isInitView: boolean;

  constructor(
    private championsService: ChampionsService,
    private spinner: NgxSpinnerService,
    private snackBarService: SnackBarService,
    private translateService: TranslateService
  ) {
    this.isInitView = true;
  }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions() {
    this.spinner.show();

    this.championsService.getChampions()
      .pipe(finalize(() => {
        setTimeout(() => {
          this.spinner.hide()
        }, 1000);
      }))
      .subscribe({
      next: (champions: any) => (this.champions = champions),
      error: () => {
        this.snackBarService.open(
          SnackBarStatesEnum.DANGER,
          this.translateService.instant('ERROR_GET_CHAMPIONS')
        );
      }
    });
  }

  onSelectTypeView(value: boolean): boolean {
    this.isInitView = value;
    return this.isInitView;
  }
}
