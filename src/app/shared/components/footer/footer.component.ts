import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear!: number;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(): number {
    const date = new Date();
    this.currentYear = date.getFullYear();
    return this.currentYear;
  }
}
