import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../Services/Film/film-service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  private filmsService = inject(FilmService);
  private router = inject(Router);

  allFilms = this.filmsService.filmsSignal;

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmsService.getAll().subscribe();
  }

  addFilm() {
    this.router.navigate(["/add-film"]);
  }

  removeFilm(id: number) {
    this.filmsService.remove(id).subscribe(() => {
      this.loadFilms();
    });
  }
}
