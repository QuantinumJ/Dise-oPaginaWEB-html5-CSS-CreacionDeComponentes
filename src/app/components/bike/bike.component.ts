import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})




export class BikeComponent implements OnInit {


  slides = [
    {img: "assets/img/bike-1.jpg"},
    {img: "assets/img/bike-2.jpg"},
    {img: "assets/img/bike-3.jpg"},
    {img: "assets/img/bike-4.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows":false,
    "dots": true,
    "fade": true,
    "autoplay": true,
    "autoplaySpeed": 2000
};











  constructor() { }

  ngOnInit(): void {





  }


}
