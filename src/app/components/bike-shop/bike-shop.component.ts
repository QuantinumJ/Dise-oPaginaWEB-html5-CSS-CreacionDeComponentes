import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-shop',
  templateUrl: './bike-shop.component.html',
  styleUrls: ['./bike-shop.component.scss']
})
export class BikeShopComponent implements OnInit {
  slides = [
    {img: "assets/img/bike-white.jpg"},
    {img: "assets/img/bike-grey.jpg"},
    {img: "assets/img/bike-red.jpg"}

  ];
  slideConfig1 = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows":false,
};
 white():void{
  for(let i of this.slides){
    i.img = "assets/img/bike-grey.jpg"
  }
}

grey(): void{
    for(let i of this.slides){
      i.img = "assets/img/bike-white.jpg"
    }

}
red(): void{
    for(let i of this.slides){
      i.img = "assets/img/bike-red.jpg"

  }
}

  constructor() { }

  ngOnInit(): void {



  }


}
