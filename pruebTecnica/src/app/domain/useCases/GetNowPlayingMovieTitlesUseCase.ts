import { Injectable } from '@angular/core';
import { NowPlayingService } from '../services/NowPlaying.service';
import { Movie } from '../../entities/Movie';

@Injectable({
  providedIn: 'root'
})
export class GetNowPlayingMovieTitlesUseCase {
  constructor(private nowPlayingService: NowPlayingService) {}

  async execute(): Promise<string[]> {
    const movies: Movie[] = await this.nowPlayingService.getNowPlayingMovies();
    return movies.map(movie => movie.title);
  }
}
