import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-champion',
  templateUrl: './splash-champion.component.html',
  styleUrls: ['./splash-champion.component.scss']
})
export class SplashChampionComponent implements OnInit {

  @Input() champion!: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
