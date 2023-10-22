import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidenavComponent } from '../../shared/components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [
        MatSidenavModule,
        SidenavComponent,
        NavbarComponent,
        RouterOutlet,
    ],
})
export class DashboardComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
