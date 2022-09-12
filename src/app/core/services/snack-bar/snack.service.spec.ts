import { HttpClientModule } from '@angular/common/http';
import { TestBed } from "@angular/core/testing";
import { SnackBarService } from './snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

fdescribe('SnackBarService', () => {
  let snackBarService: SnackBarService;
  let matSnackBar: MatSnackBar;

  beforeEach(async () => {
    snackBarService = new SnackBarService(matSnackBar);
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('it should be created', () => {
    expect(snackBarService).toBeTruthy();
  });
});