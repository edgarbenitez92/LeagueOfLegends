import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChampionsService } from 'src/app/core/services/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions.interface';

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

    this.championsService.getChampions().subscribe({
      next: (champions: Champion[]) => this.champions = champions,
      error: (error) => this.spinner.hide(),
      complete: () => this.spinner.hide(),
    });
  }

  onSelectTypeView({ source: { checked } }: MatButtonToggleChange) {
    this.isInitView = !this.isInitView;
  }
}
