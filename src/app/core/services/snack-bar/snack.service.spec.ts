import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SnackBarService } from './snack-bar.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { SnackBarStatesEnum } from 'src/app/shared/enums/snack-bar-states.enum';

fdescribe('SnackBarService', () => {
  let snackBarService: SnackBarService;
  let matSnackBar: MatSnackBar;

  beforeEach(async () => {
    snackBarService = new SnackBarService(matSnackBar);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });

  it('it should be created', () => {
    expect(snackBarService).toBeTruthy();
  });

  it('It should call the open snack bar', () => {
    const spy = spyOn(snackBarService, 'open');
    snackBarService.open(SnackBarStatesEnum.DANGER, 'Testing Snack bar');
    expect(spy).toHaveBeenCalled();
  });
});
