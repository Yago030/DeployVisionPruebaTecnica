import { Component, OnInit } from '@angular/core';
import { GetPopularMovieDescriptionUseCase } from '../../domain/useCases/GetPopularMovieDescriptionUseCase';
import { GetPopularMovieImagesUseCase } from '../../domain/useCases/GetPopularMovieImagesUseCase';
import { GetPopularMovieTitlesUseCase } from '../../domain/useCases/getPopularMovieTitlesUseCase';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  public card: string[] = [];
  public overviews: string[] = [];
  public posterUrls: string[] = [];


  constructor(
    private getPopularMovieTitlesUseCase: GetPopularMovieTitlesUseCase,
    private  getPopularMovieDescriptionUseCase :GetPopularMovieDescriptionUseCase,
    private getPopularMovieImagesUseCase: GetPopularMovieImagesUseCase

  ){}

  ngOnInit(): void {
    this.fetchPopularMovieTitles();
    this.fetchPopularMovieDescription();
    this.fetchPopularMovieImages();

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
      console.error('Error fetching popular movie titles', error);
    }
  }

  private async fetchPopularMovieImages(): Promise<void> {
    try {
      this.posterUrls = await this.getPopularMovieImagesUseCase.execute();
    } catch (error) {
      console.error('Error fetching popular movie images', error);
    }
  }

}
