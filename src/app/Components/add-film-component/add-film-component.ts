import { Component, inject } from '@angular/core';
import { FilmService } from '../../Services/Film/film-service';
import { Router } from '@angular/router';
import { FilmAddModel } from '../../Models/film-add-model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-film-component',
  styleUrl: './add-film-component.css',
  templateUrl: './add-film-component.html',
})
export class AddFilmComponent {
  filmsService = inject(FilmService);
  router = inject(Router)

  filmToAdd: FilmAddModel = {
    Title: "",
    Description: "",
    PosterUrl: "",
    PublicationYear: 0,
    LengthInMinuts: 0,
  }

  addFilm() {
    this.filmsService.add(this.filmToAdd).subscribe();
  }

  backToHome() {
    this.router.navigate(["/home"]);
  }
}
