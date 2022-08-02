import { Component, HostListener } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    this.updatePWA();
  }

  updatePWA() {
    this.swUpdate.activateUpdate().then((value) => {
      window.location.reload();
    });
  }
}
