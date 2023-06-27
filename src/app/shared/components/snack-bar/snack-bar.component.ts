import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacySnackBarRef as MatSnackBarRef, MAT_LEGACY_SNACK_BAR_DATA as MAT_SNACK_BAR_DATA } from '@angular/material/legacy-snack-bar';
import { SnackBarStatesEnum } from '../../enums/snack-bar-states.enum';
import { SnackBarData } from '../../interfaces/app-snack-bar-data.interface';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {
  icon: string;

  constructor(
    public matSnackBarRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData
  ) {
    if (data.state === SnackBarStatesEnum.SUCCESS) {
      this.icon = 'check_circle';
    } else if (data.state === SnackBarStatesEnum.WARNING) {
      this.icon = 'warning';
    } else {
      this.icon = 'report';
    }
  }

  ngOnInit(): void {}
}
