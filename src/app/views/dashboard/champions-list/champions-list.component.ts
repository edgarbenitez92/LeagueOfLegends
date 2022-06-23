import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/app/core/champions/champions.service';
import { Champion } from 'src/app/shared/interfaces/champions';

@Component({
    selector: 'app-champions-list',
    templateUrl: './champions-list.component.html',
    styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit {

    champions: Champion[] = [];

    constructor(private championsService: ChampionsService) { }

    ngOnInit(): void {

        this.championsService.getChampions()
            .subscribe(response => {
                for (let name in response.data) {
                    this.champions.push(response.data[name])
                }
            });
    }

}
