import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  selectedMovies: any[] = [];

  constructor(private service: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.getFavoriteMovies();
  }

  getFavoriteMovies() {
    this.selectedMovies = this.service.getFavorites();
    console.log(this.selectedMovies);
  }

  removeFavorite = (index: number) => {
    this.selectedMovies.splice(index, 1);
  };
}
