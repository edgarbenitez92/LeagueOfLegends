import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    standalone: true,
    imports: [
        MatLegacyButtonModule,
        RouterLink,
        TranslateModule,
    ],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
