// NowPlaying.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Movie } from '../../entities/Movie';
// NowPlaying.service.ts
@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';
  private apiKey = environment.apiKey;

  async getNowPlayingMovies(): Promise<Movie[]> {
    try {
      const response = await axios.get(`${this.apiUrl}?api_key=${this.apiKey}`);
      console.log('Respuesta del servicio:', response.data); // Para debug
      if (!Array.isArray(response.data.results)) {
        console.error('Los resultados no son un array:', response.data);
        return [];
      }
      return response.data.results;
    } catch (error) {
      console.error('Error en NowPlayingService:', error);
      return [];
    }
  }
}
