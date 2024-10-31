import { Component, OnInit } from '@angular/core';
import { GetPopularMovieDescriptionUseCase } from '../../domain/useCases/GetPopularMovieDescriptionUseCase';
import { GetPopularMovieImagesUseCase } from '../../domain/useCases/GetPopularMovieImagesUseCase';
import { GetPopularMovieTitlesUseCase } from '../../domain/useCases/GetPopularMovieTitlesUseCase';
import { GetNowPlayingMovieDescriptionUseCase } from '../../domain/useCases/GetNowPlayingMovieDescriptionUseCase';
import { GetNowPlayingMovieImagesUseCase } from '../../domain/useCases/GetNowPlayingMovieImagesUseCase';
import { GetNowPlayingMovieTitlesUseCase } from '../../domain/useCases/GetNowPlayingMovieTitlesUseCase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  public card: string[] = [];
  public overviews: string[] = [];
  public posterUrls: string[] = [];
  public currentRoute: string = ''; // Añade esta propiedad

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getPopularMovieTitlesUseCase: GetPopularMovieTitlesUseCase,
    private getPopularMovieDescriptionUseCase: GetPopularMovieDescriptionUseCase,
    private getPopularMovieImagesUseCase: GetPopularMovieImagesUseCase,
    private getNowPlayingMovieTitlesUseCase: GetNowPlayingMovieTitlesUseCase,
    private getNowPlayingMovieDescriptionUseCase: GetNowPlayingMovieDescriptionUseCase,
    private getNowPlayingMovieImagesUseCase: GetNowPlayingMovieImagesUseCase,
  ) {}

// card-container.component.ts
ngOnInit(): void {
  const currentRoute = this.route.snapshot.url.join('');
  console.log('Ruta actual:', currentRoute);

  if (currentRoute === 'estrenos') {
    Promise.all([
      this.fetchNowPlayingMovieTitles(),
      this.fetchNowPlayingMovieDescription(),
      this.fetchNowPlayingMovieImages()
    ]).catch(error => console.error('Error cargando datos de estrenos:', error));
  } else {
    Promise.all([
      this.fetchPopularMovieTitles(),
      this.fetchPopularMovieDescription(),
      this.fetchPopularMovieImages()
    ]).catch(error => console.error('Error cargando datos populares:', error));
  }
}

get pageTitle(): string {
  return this.currentRoute === 'estrenos' ? 'Películas en estreno' : 'Películas populares';
}


  private async fetchPopularMovieTitles(): Promise<void> {
    try {
      this.card = await this.getPopularMovieTitlesUseCase.execute();
    } catch (error) {
      console.error('Error fetching popular movie titles', error);
    }
  }

  private async fetchPopularMovieDescription(): Promise<void> {
    try {
      this.overviews = await this.getPopularMovieDescriptionUseCase.execute();
    } catch (error) {
      console.error('Error fetching popular movie descriptions', error);
    }
  }

  private async fetchPopularMovieImages(): Promise<void> {
    try {
      this.posterUrls = await this.getPopularMovieImagesUseCase.execute();
    } catch (error) {
      console.error('Error fetching popular movie images', error);
    }
  }

  private async fetchNowPlayingMovieTitles(): Promise<void> {
    try {
      this.card = await this.getNowPlayingMovieTitlesUseCase.execute();
      console.log('estamos en el feth ... ', this.card)
    } catch (error) {
      console.error('Error fetching now playing movie titles', error);
    }
  }

  private async fetchNowPlayingMovieDescription(): Promise<void> {
    try {
      this.overviews = await this.getNowPlayingMovieDescriptionUseCase.execute();
    } catch (error) {
      console.error('Error fetching now playing movie descriptions', error);
    }
  }

  private async fetchNowPlayingMovieImages(): Promise<void> {
    try {
      this.posterUrls = await this.getNowPlayingMovieImagesUseCase.execute();
    } catch (error) {
      console.error('Error fetching now playing movie images', error);
    }
  }
}
