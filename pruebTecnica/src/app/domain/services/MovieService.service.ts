import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  async getPopularMovies() {
    try {
      const response = await axios.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
}
