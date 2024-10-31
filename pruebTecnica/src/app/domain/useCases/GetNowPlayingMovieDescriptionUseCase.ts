import { Injectable } from '@angular/core';
import { NowPlayingService } from '../services/NowPlaying.service';
import { Movie } from '../../entities/Movie';

@Injectable({
  providedIn: 'root'
})
export class GetNowPlayingMovieDescriptionUseCase {
  constructor(private nowPlayingService: NowPlayingService) {}

  async execute(): Promise<string[]> {
    const movies: Movie[] = await this.nowPlayingService.getNowPlayingMovies();
    console.log('Movies:', movies); // Para ver toda la información de las películas
    const overviews = movies.map(movie => movie.overview);
    console.log('Overviews:', overviews); // Para ver los overviews
    return overviews;
  }

}
