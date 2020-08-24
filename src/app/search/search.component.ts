import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  search = (form: NgForm) => {
    this.route.navigate(['mainpage'], {
      queryParams: {
        term: form.value.searchTerm,
      },
    });
  };
}
