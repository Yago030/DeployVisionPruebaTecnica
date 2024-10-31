import { Injectable } from '@angular/core';
import { ImageService } from '../services/ImageMovie.service';
import { NowPlayingService } from '../services/NowPlaying.service';
import { Movie } from '../../entities/Movie';

@Injectable({
  providedIn: 'root'
})
export class GetNowPlayingMovieImagesUseCase {
  constructor(
    private nowPlayingService: NowPlayingService,
    private imageService: ImageService
  ) {}

  async execute(): Promise<string[]> {
    const movies: Movie[] = await this.nowPlayingService.getNowPlayingMovies();
    return movies.map(movie => this.imageService.getImageUrl(movie.poster_path));
  }
}
