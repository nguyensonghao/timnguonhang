import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  constructor() { }

  ngOnInit(): void {
  }

}
