import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { SnackBarStatesEnum } from 'src/app/shared/enums/snack-bar-states.enum';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private matSnackBar: MatSnackBar) { }

  open(state: SnackBarStatesEnum, text: string) {
    this.matSnackBar.openFromComponent(SnackBarComponent, {
      data: {
        state,
        text,
      },
      panelClass: [state],
    });
  }
}
