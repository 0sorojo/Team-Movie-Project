import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  movies: any;



  constructor(private route: ActivatedRoute, private service: SearchService) { }

  ngOnInit(): void {
    this.discoverMovies();
  }

  discoverMovies = () => {
    this.route.queryParamMap.subscribe((params) => {
      let genre = params.get("genre");
      let term = params.get('term');
      let rating = params.get('rating');
      if (term) {
        this.service.getSearch(term).subscribe((response) => {
          this.movies = response.results;
        });
      }
      else {
        this.service.discoverMovies(genre, rating).subscribe((response) => {
          this.movies = response.results;
        })
      }
    })
  }

  addFavorite = (movie: any) => {
    this.service.addFavorite(movie);
  }

}
