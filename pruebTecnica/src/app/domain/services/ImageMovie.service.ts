import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'https://image.tmdb.org/t/p/w500';

  getImageUrl(posterPath: string): string {
    return `${this.baseUrl}${posterPath}`;
  }
}
