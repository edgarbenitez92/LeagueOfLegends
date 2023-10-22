import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatLegacyButtonModule,
        MatIconModule,
        MatLegacyListModule,
        RouterLink,
        TranslateModule,
    ],
})
export class SidenavComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor() {}

  ngOnInit(): void {}
}
