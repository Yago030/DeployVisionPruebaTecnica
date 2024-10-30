import { Injectable } from '@angular/core';
import { Movie } from '../../entities/Movie';
import { MovieService } from '../services/MovieService.service';
import { ImageService } from '../services/ImageMovie.service';

@Injectable({
  providedIn: 'root'
})
export class GetPopularMovieImagesUseCase {
  constructor(
    private movieService: MovieService,
    private imageService: ImageService
  ) {}

  async execute(): Promise<string[]> {
    const movies: Movie[] = await this.movieService.getPopularMovies();
    return movies.map(movie => this.imageService.getImageUrl(movie.poster_path));
  }
}
