import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { NgControlStatus } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  movies: any;
  constructor(private route: ActivatedRoute, private service: SearchService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies = () => {
    this.route.queryParamMap.subscribe((params) => {
      console.log('This is what we look at', params.get('term'));
      let term = params.get('term');
      this.service.getSearch(term).subscribe((response) => {
        console.log(response.results);
        this.movies = response.results;
      });
    });
  };
}
