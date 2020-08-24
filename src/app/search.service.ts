import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  getMovies(genre: string) {
    throw new Error("Method not implemented.");
  }
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie';
  key: string = 'c56a8f474bae1a00470aa7c17e389e57';
  genreBaseUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  discoverURL: string = "https://api.themoviedb.org/3/discover/movie";


  constructor(private search: HttpClient) { }

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

  discoverMovies = (genre: string): any => {
    return this.search.get(this.discoverURL, {
      params: {
        api_key: this.key,
        with_genres: genre,
      },
    });
  }
}
