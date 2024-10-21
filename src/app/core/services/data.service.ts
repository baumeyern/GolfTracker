import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../player';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private http: HttpClient) {
    }

    public getPlayerData(): Observable<Player[]> {
        return this.http.get<Player[]>('app/core/data/players.json');
    }
}
