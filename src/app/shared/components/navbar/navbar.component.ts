import { Component, Input, OnInit } from '@angular/core';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogModule,
} from '@angular/material/legacy-dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { AppSettingsDialogComponent } from '../app-settings-dialog/app-settings-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SnackBarService } from 'src/app/core/services/snack-bar/snack-bar.service';
import { MatLegacySnackBarModule } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    NgIf,
    MatLegacyButtonModule,
    MatIconModule,
    RouterLink,
    MatLegacyTooltipModule,
    TranslateModule,
    MatLegacyDialogModule,
    MatLegacySnackBarModule,
  ],
  providers: [SnackBarService],
})
export class NavbarComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openAppSettingsDialog() {
    this.dialog.open(AppSettingsDialogComponent);
  }
}
