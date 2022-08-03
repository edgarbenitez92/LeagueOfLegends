import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { AppSettingsDialogComponent } from '../app-settings-dialog/app-settings-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openAppSettingsDialog() {
    this.dialog.open(AppSettingsDialogComponent);
  }
}
