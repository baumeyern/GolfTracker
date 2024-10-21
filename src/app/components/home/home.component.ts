import {Component} from '@angular/core';
import {Player} from '../../core/player';
import {DataService} from '../../core/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    public Players: Player[] = [];

    constructor(private dataService: DataService) {
        this.dataService.getPlayerData().subscribe((data: Player[]) => {
            this.Players = data;
        });
    }

}
