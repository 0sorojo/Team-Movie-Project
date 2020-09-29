import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  getMovies(genre: string) {
    throw new Error('Method not implemented.');
  }
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie';
  key: string = 'Api_key';
  genreBaseUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  discoverURL: string = 'https://api.themoviedb.org/3/discover/movie';
  trendingURL: string = 'https://api.themoviedb.org/3/movie/popular';

  favoriteMovies: any[] = [];

  constructor(private search: HttpClient) {}

  getSearch = (searchTerm: string): any => {
    return this.search.get(this.baseUrl, {
      params: {
        api_key: this.key,
        query: searchTerm,
        // sort_by: popularity.desc,
      },
    });
  };

  getGenres = (): any => {
    return this.search.get(this.genreBaseUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  discoverMovies = (genre: string, rating: string): any => {
    return this.search.get(this.discoverURL, {
      params: {
        api_key: this.key,
        with_genres: genre,
        ['vote_average.gte']: rating,
      },
    });
  };

  getFavorites = () => {
    return this.favoriteMovies;
  };

  addFavorite = (movie: any) => {
    this.favoriteMovies.unshift(movie);
    console.log(this.favoriteMovies);
  };

  onDelete = (index: number) => {
    this.favoriteMovies.splice(index, 1);
  };

  getTrending = (): any => {
    return this.search.get(this.trendingURL, {
      params: {
        api_key: this.key,
      },
    });
  };
}
