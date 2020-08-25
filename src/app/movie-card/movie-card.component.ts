import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieRef: any;
  @Output() added = new EventEmitter<void>();

  constructor(private service: SearchService) { }

  ngOnInit(): void { }

  addFavoriteMovie = () => {
    this.added.emit();
  }


}
