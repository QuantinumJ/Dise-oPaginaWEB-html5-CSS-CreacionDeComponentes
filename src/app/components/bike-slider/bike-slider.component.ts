import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-slider',
  templateUrl: './bike-slider.component.html',
  styleUrls: ['./bike-slider.component.scss']
})
export class BikeSliderComponent implements OnInit {
  slides = [
    {img: "assets/img/bike-5.jpg"},
    {img: "assets/img/bike-6.jpg"},
    {img: "assets/img/bike-7.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows":false,
    "dots": true,
    "fade": true,
    "autoplay": true,
    "autoplaySpeed": 3000
};

  constructor() { }

  ngOnInit(): void {

  }

}
