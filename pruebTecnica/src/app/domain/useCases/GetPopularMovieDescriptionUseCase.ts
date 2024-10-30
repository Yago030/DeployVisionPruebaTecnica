import { Injectable } from '@angular/core';
import { Movie } from "../../entities/Movie";
import { MovieService } from "../services/MovieService.service";

@Injectable({
  providedIn: 'root'
})
export class GetPopularMovieDescriptionUseCase {
  constructor(private movieService: MovieService) {}

  async execute(): Promise<string[]> {
    const movies: Movie[] = await this.movieService.getPopularMovies();
    return movies.map(movie => movie.overview);
  }
}
