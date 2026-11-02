import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FilmModel } from '../../Models/film-model';
import { FilmAddModel } from '../../Models/film-add-model';

@Service()
export class FilmService {
    API_URL = "http://localhost:5211/api/films";
    http = inject(HttpClient);

    filmsSignal = signal<FilmModel[]>([]);

    getAll() {
        return this.http.get<FilmModel[]>(`${this.API_URL}/all`).pipe(
            tap(films => this.filmsSignal.set(films))
        );;
    }

    add(film: FilmAddModel): Observable<any> {
        return this.http.post(`${this.API_URL}/add`, film, { responseType: 'text' });
    }

    remove(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/remove/${id}`);
    }
}
