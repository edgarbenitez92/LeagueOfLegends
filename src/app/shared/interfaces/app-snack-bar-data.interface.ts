import { SnackBarStatesEnum } from '../enums/snack-bar-states.enum';

export interface SnackBarData {
  state: SnackBarStatesEnum;
  text: string;
}
